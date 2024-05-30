import { useEffect, useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

function Katalog(){
    useEffect(() => {
        getGaleri();
        window.scrollTo(0, 0);
      }, []); 
    const [getKonten,setKonten]= useState([]);
    const getGaleri = async () => {
        const response = await Axios.get("http://localhost:8000/api/get");
        setKonten(response.data);
      };
    return(
        <div className="my-20 text-left">
            <h1 className="text-5xl font-bold text-left">Jelajahi Keanekaragaman Hayati <br/> Burung yang Menakjubkan</h1>
            <div className='mt-12'>
                <input value='Masukkan Nama/Jenis burung yang ingin kamu cari' type="text" className='border border-md border-black py-1 mr-3 pl-1 w-96 text-slate-400'/>
                <button className='px-5 py-1 button-search text-white'>Cari</button>
            </div>
            <div className="grid grid-cols-4 gap-6 my-8 text-left">
                {getKonten.map((item,idx)=>(
                    <div key={idx} className='card-bird flex flex-col justify-between text-left'>
                        <img className='w-72' src={`bird/${item.gambar}`} alt="" />
                        <h2 className='text-xl font-bold my-3'>{item.nama_Burung}</h2>
                        <p className='mb-3 h-96'>{item.deskripsi}</p>
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