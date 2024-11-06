import { useEffect, useState } from "react";
import Axios from 'axios';
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faMapLocationDot } from "@fortawesome/free-solid-svg-icons";

function Detail_Peta(){
    useEffect(() => {
        getPeta();
        getLokasi();
        window.scrollTo(0, 0);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []); 
    const { id } = useParams();
    const [peta,setpeta]= useState([]);
    const [lokasi,setlokasi]= useState([]);
    const getPeta = async () => {
      const response = await Axios.get(`http://localhost:8000/api/detail_peta/${id}`);
      setpeta(response.data);
    };
    const getLokasi = async () => {
        const response = await Axios.get(`http://localhost:8000/api/peta_burung/${id}`);
        setlokasi(response.data);
      };
    return(
        <div className="my-12">
            {peta.map((item,idx)=>(
                <div key={idx}>
                    <div className="text-left my-3">
                        <Link to='/peta'><FontAwesomeIcon icon={faAngleLeft}/> Semua Peta</Link>
                    </div>
                    <div className="flex flex-col lg:flex-row text-left justify-between my-12">
                        <div>
                            <h3 className="text-md font-semibold">{item.lokasi}</h3>
                            <h2 className="text-3xl font-bold mb-3">{item.nama_Tempat}</h2>
                            <p>{item.deskripsi}</p>
                            <div className="text-left my-5 ml-5">
                                <ul className="list-disc">
                                    {lokasi.map((item,idx)=>(
                                        <li key={idx}>{item.nama_Burung}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <img className="w-96 ml-0 lg:ml-40 md:ml-32" src={`/peta/${item.gambar}`} alt="" />  
                    </div>
                    <div className="flex justify-center">
                        <iframe
                            src={item.map}
                            className="h-[32vh] lg:h-[75vh] w-full"
                            allowFullScreen="true"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                    <div className="text-left my-5">
                        <h4>
                            <FontAwesomeIcon className="mr-3" style={{ fontSize: '2em' }} icon={faMapLocationDot} />
                            {item.alamat}
                        </h4>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Detail_Peta;