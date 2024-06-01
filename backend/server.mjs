import response from './response.mjs';
import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import bodyParser from 'body-parser';
import multer from 'multer';
import jwt from 'jsonwebtoken';

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sikab'
});

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.json());

const authDataMap = new Map();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '.uploads');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.mimetype.split('/')[1]);
  }
});

const upload = multer({ storage: storage });

server.post('/api/insert', upload.single('Gambar'), (req, res) => {
  db.connect(() => {
    const { Token, Judul, Waktu, Burung, Isi } = req.body;
    const Gambar = req.file.filename; 
    const authData = authDataMap.get(Token).userId;
    console.log('ini authentication',authData)
    if(authData){
      const ID_AdminValue = authData; 
      const Status = 'un-rilis';
      const sqlInsert = `INSERT INTO artikel (ID_User, Judul, Waktu, Burung, Gambar, Isi, S) VALUES (?, ?, ?, ?, ?, ?, ?)`;
      const values = [ID_AdminValue,Judul, Waktu, Burung, Gambar, Isi, Status];
    
      db.query(sqlInsert, values, (err, fields) => {
        if (err) {
          console.error('Error = ',err);
          res.status(500).send('Gagal menyimpan data.');
        } else {
          if (fields.affectedRows) {
            response(200, "INI INSERT", "BERHASIL", res);
          } else {
            console.log("Gagal menyimpan data.");
          }
          console.log(fields);
        }
      });
    }
  })
});


server.get('/api/get', (req, res) => {
    const sqlSelect = "SELECT * FROM burung";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

server.get('/api/getPeta', (req, res) => {
  const sqlSelect = "SELECT * FROM habitat";
  db.query(sqlSelect, (err, result) => {
      res.send(result);
  });
});

server.get('/api/berita', (req, res) => {
  const sqlSelect = "SELECT * FROM berita";
  db.query(sqlSelect, (err, result) => {
      res.send(result);
  });
});

server.get('/api/search', (req, res) => {
  const searchKeyword = req.query.keyword;
  if (!searchKeyword) {
      return res.status(400).send({ error: 'Keyword is required' });
  }
  const sqlSelect = "SELECT * FROM berita WHERE Judul REGEXP ?";
  db.query(sqlSelect, [searchKeyword], (err, result) => {
      if (err) {
          return res.status(500).send(err);
      }
      res.send(result);
  });
});

server.post('/api/getAcc', (req, res) => {
  const { username, password } = req.body;
  const sqlSelect = "SELECT * FROM user WHERE Username = ? AND Password = ?";
  db.query(sqlSelect, [username, password], (err, result) => {
    if (err) {
      res.status(500).send('Server error');
      return;
    }

    if (result.length > 0) {
      const user = result[0];
      const token = jwt.sign({ username: user.Username }, 'sikab2024', { expiresIn: '1h' });
      res.json({ token });
    } else {
      res.status(401).json({ message: 'Invalid username or password' });
    }
  });
});

server.get('/api/detail_burung/:ID_Burung', (req, res) => {
  const { ID_Burung } = req.params;
  const sqlSelect = "SELECT * FROM burung WHERE ID_Burung = ?";
  const values = [ID_Burung];
  db.query(sqlSelect, values, (err, result) => {
      res.send(result);
  });
});

server.get('/api/detail_berita/:ID_Berita', (req, res) => {
  const { ID_Berita } = req.params;
  const sqlSelect = "SELECT * FROM berita WHERE ID_Berita = ?";
  const values = [ID_Berita];
  db.query(sqlSelect, values, (err, result) => {
      res.send(result);
  });
});

server.get('/api/detail_peta/:ID_Tempat', (req, res) => {
  const { ID_Tempat } = req.params;
  const sqlSelect = "SELECT * FROM habitat WHERE ID_Tempat = ?";
  const values = [ID_Tempat];
  db.query(sqlSelect, values, (err, result) => {
      res.send(result);
  });
});

server.get('/api/peta_burung/:ID_Tempat', (req, res) => {
  const { ID_Tempat } = req.params;
  const sqlSelect = "SELECT nama_Burung FROM burung WHERE ID_Tempat = ?";
  const values = [ID_Tempat];
  db.query(sqlSelect, values, (err, result) => {
      res.send(result);
  });
});

server.get('/api/user/:ID_User', (req, res) => {
  const { ID_User } = req.params;
  const sqlSelect = "SELECT name_Author FROM user WHERE ID_User = ?";
  const values = [ID_User];
  db.query(sqlSelect, values, (err, result) => {
      res.send(result);
  });
});

server.get('/api/Artikel/:ID_Berita', (req, res) => {
  const { ID_Konten } = req.params;
  const sqlSelect = `SELECT * FROM berita WHERE ID_Berita = ?`;
  const values = [ID_Konten];
  db.query(sqlSelect, values, (err, result) => {
      res.send(result);
  });
});

server.get('/api/galeri/:ID_Burung', (req, res) => {
  const { ID_Burung } = req.params;
  const sqlSelect = "SELECT Gambar FROM galeri WHERE ID_Burung = ?";
  const values = [ID_Burung];
  db.query(sqlSelect, values, (err, result) => {
      res.send(result);
  });
});

server.post('/api/auth', (req, res) => {
  const { userId, userToken } = req.body;
  authDataMap.set(userToken,{ userId, userToken });
  console.log('login auth',authDataMap);
  const responseData = {
    status: 'success',
    message: 'Autentikasi berhasil!',
    userId: userId,
    userToken:userToken
  };
  res.json(responseData);
});

db.connect((err) => {
    if (err) throw err;
    console.log("Sukses terhubung");
    server.get("/", (req, res) => {
        res.send("OK");
    });
});

server.listen(8000, () => {
    console.log("Started");
});