import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/molecul/Headers';
import Login from './page/Login';
import Home from './page/Home';
import Footers from './component/molecul/Footers';
import Katalog from './page/Katalog';
import Peta from './page/Peta';
import Berita from './page/Berita';
import Detail_Galeri from './page/Detail_Galeri';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <div>
        {/* <Header /> */}
        <div className=''>
          <Routes>
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/' element={<Home />} />
            <Route exact path='/katalog' element={<Katalog />} />
            <Route exact path='/peta' element={<Peta />} />
            <Route exact path='/berita' element={<Berita />} />s
            <Route path='/galeri/:id' element={<Detail_Galeri />} />
          </Routes>
        </div>
        {/* <Footers /> */}
      </div>
    </AuthProvider>
  );
}

export default App;
