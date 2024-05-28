import { useEffect, useState } from "react";
import Axios from 'axios';

function Peta(){
    useEffect(() => {
        getGaleri();
        window.scrollTo(0, 0);
      }, []); 
    const [getKonten,setKonten]= useState([]);
    const getGaleri = async () => {
        const response = await Axios.get("http://localhost:8000/api/getPeta");
        setKonten(response.data);
      };
    return(
        <div className="my-20 text-left">
            <h1 className="text-3xl font-bold text-left">Jelajahi Sebaran Burung di Kalimantan <br/> Dengan Peta Interaktif <br/> Keanekaragaman Hayati Burung</h1>
            <div className='mt-12'>
                <input value='Masukkan Nama/Jenis burung yang ingin kamu cari' type="text" className='border border-md border-black py-1 mr-3 pl-1 w-96 text-slate-400'/>
                <button className='px-5 py-1 button-search text-white'>Cari</button>
            </div>
            <div className="my-12">
                {getKonten.map((item,idx)=>(
                    <div className="flex justify-between w-full mb-12" key={idx}>
                        <div className="flex flex-col justify-between">
                            <div>
                                <h3 className="text-md font-semibold">{item.lokasi}</h3>
                                <h2 className="text-3xl font-bold mb-3">{item.nama_Tempat}</h2>
                                <p>{item.deskripsi}</p>
                            </div>
                            <button className='bg-green-900 w-fit px-4 py-1 rounded-md text-white'>Lihat</button>
                        </div>
                        <img className="w-96 ml-40" src={`/peta/${item.gambar}`} alt="" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Peta;