import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from 'axios';

function Detail_Galeri(){
    const { id } = useParams();
    const [getKonten,setKonten]= useState([]);
    const [galeri,setGaleri]= useState([]);
    const getGaleri = async () => {
      const response = await Axios.get(`http://localhost:8000/api/galeri/${id}`);
      setGaleri(response.data);
    };
    const getBurung = async () => {
        const response = await Axios.get(`http://localhost:8000/api/detail_burung/${id}`);
        setKonten(response.data);
      };
    useEffect(() => {
        getBurung();
        getGaleri();
        window.scrollTo(0, 0);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []); 
    return(
        <div className="my-12">
            {getKonten.map((item,idx)=>(
                <div key={idx} className="flex flex-col items-center w-full h-full">
                    <h1 className="text-5xl font-bold font-serif my-5">{item.nama_Burung}</h1>
                    <p className="mx-5 lg:mx-72 md:mx-32">{item.deskripsi}</p>
                    <div className="flex w-full h-full my-7">
                        <img className="w-2/4 lg:w-full min-h-full object-cover mr-2 lg:mr-5" src={`/bird/${item.gambar}`} alt="" />
                        <div className="grid w-2/4 grid-cols-2 gap-2 lg:gap-4 min-h-full">
                            {galeri.map((item,idx)=>(
                                <div key={idx}>
                                    <img className="h-full w-full object-cover" src={`/galery/${item.Gambar}`} alt="" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Detail_Galeri;