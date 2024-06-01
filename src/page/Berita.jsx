import profil from '/berita/profil.png';
import { useEffect, useState } from "react";
import Axios from 'axios';
import { Link } from 'react-router-dom';

function Berita(){
    useEffect(() => {
        getBerita();
        window.scrollTo(0, 0);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []); 
    const [user,setUser]= useState([]);
    const [getKonten,setKonten]= useState([]);
    const getBerita = async () => {
        const response = await Axios.get("https://s74p83tb-8000.asse.devtunnels.ms/api/berita");
        setKonten(response.data);
        fetchUsers(response.data)
      };
    const fetchUsers = async (author) => {
        try {
            const userIds = author.map(item => item.ID_User);
            const uniqueUserIds = Array.from(new Set(userIds));
            const promises = uniqueUserIds.map(async userId => {
                const response = await Axios.get(`https://s74p83tb-8000.asse.devtunnels.ms/api/user/${userId}`);
                return { [userId]: response.data[0]?.name_Author || 'Unknown' };
            });
            const users = await Promise.all(promises);
            const usersMap = users.reduce((acc, user) => {
                const userId = Object.keys(user)[0];
                acc[userId] = user[userId];
                return acc;
            }, {});
            setUser(usersMap);
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('id-ID', options);
      };
    return(
        <div className="my-20 text-left">
            <h1 className="text-5xl font-bold text-left">Tetap Terhubung dengan Kabar <br/>Terbaru tentang Burung Kalimantan!</h1>
            <h4 className="text-md font-light mt-3">Berita Terbaru tentang Keanekaragaman Hayati Burung di Kalimantan</h4>
            <article className="my-12">
                {getKonten.slice(0,1).map((item,idx)=>{
                    return(
                        <div key={idx} className="flex justify-between">
                        <img className="mr-12" width={600} src={`/berita/${item.Gambar}`} alt="" />
                        <div className="flex flex-col justify-around">
                            <Link to={`/berita/detail/${item.ID_Berita}`}>
                            
                                <h2 className="text-2xl font-semibold text-left my-3">{item.Judul}</h2>
                                <p className="text-justify">{item.Deskripsi}</p>
                            </Link>
                            <div className="flex justify-start mt-5">
                                <img className="mr-5" width={50} src={profil} alt="" />
                                <div>
                                    <h3 key={idx} className="text-md border-b-2 border-black">{user[item.ID_User]}</h3>
                                    <h5 className="text-md font-light">{formatDate(item.Waktu)}</h5>
                                </div>
                            </div>
                        </div>
                        </div>
                    )})}
                <div className="grid grid-cols-3 gap-8 my-12">
                    {getKonten.slice(1).map((item,idx)=>(
                        <div key={idx} className="flex flex-col justify-between">
                            <div>
                                <img className="mr-12" width={600} src={`/berita/${item.Gambar}`} alt="" />
                                <Link to={`/berita/detail/${item.ID_Berita}`}>
                                    <h2 className="text-2xl font-semibold text-left mt-5 mb-3">{item.Judul}</h2>
                                    <p className="text-justify">{item.Deskripsi}</p>
                                </Link>
                            </div>
                            <div className="flex justify-start mt-5">
                                <img className="mr-5" width={50} src={profil} alt="" />
                                <div>
                                    <h3 className="text-md border-b-2 border-black">{user[item.ID_User]}</h3>
                                    <h5 className="text-md font-light">{formatDate(item.Waktu)}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </article>
        </div>
    )
}

export default Berita;