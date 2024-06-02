import { useEffect, useState } from 'react';
import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Katalog(){
    useEffect(() => {
        getGaleri();
        window.scrollTo(0, 0);
      }, []); 

      const [searchTerm, setSearchTerm] = useState('');
      const navigate = useNavigate();
      
      const handleInputChange = (e) => {
          setSearchTerm(e.target.value);
      };
  
      const handleSearch = async () => {
          try {
              const response = await axios.get('https://s74p83tb-8000.asse.devtunnels.ms/api/search/burung', {
                  params: {
                      keyword: searchTerm
                  }
              });
              navigate('/search', { state: { results: response.data } });
          } catch (error) {
              console.error("Error!", error);
          }
      };
    const [getKonten,setKonten]= useState([]);
    const getGaleri = async () => {
        const response = await Axios.get("https://s74p83tb-8000.asse.devtunnels.ms/api/get");
        setKonten(response.data);
      };
    return(
        <div className="my-5 lg:my-20 text-left h-full">
            <h1 className="text-4xl lg:text-5xl w-full lg:w-2/4 font-bold text-left">Jelajahi Keanekaragaman Hayati Burung yang Menakjubkan</h1>
            <div className='mt-12'>
                <input placeholder='Masukkan Nama/Jenis burung yang ingin kamu cari' onChange={handleInputChange} value={searchTerm} type="text" className='border border-md border-black py-1 mr-3 pl-1  w-60 lg:w-96 text-slate-400'/>
                <button  onClick={handleSearch}  className='px-5 py-1 button-search text-white'>Cari</button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6 my-8 text-left">
                {getKonten.map((item,idx)=>(
                    <div key={idx} className='h-[50vh] lg:h-[75vh] flex flex-col justify-between text-left'>
                        <img className='w-72' src={`bird/${item.gambar}`} alt="" />
                        <h2 className='text-xl font-bold my-3'>{item.nama_Burung}</h2>
                        <p className='mb-3 h-96 text-justify'>{item.deskripsi}</p>
                        <Link to={`/galeri/${item.ID_Burung}`}>
                            <button className='bg-green-900 w-fit px-4 py-1 rounded-md text-white'>Lihat</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Katalog;