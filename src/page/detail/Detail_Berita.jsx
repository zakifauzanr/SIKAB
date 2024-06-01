import { useEffect, useState } from "react";
import Axios from 'axios';
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

function Detail_Berita(){
    const { id } = useParams();
    useEffect(() => {
        getBerita();
        getOther();
        window.scrollTo(0, 0);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []); 
    const [other,setOther]= useState([]);
    const getOther = async () => {
        const response = await Axios.get("https://s74p83tb-8000.asse.devtunnels.ms/api/berita");
        setOther(response.data);
        fetchUsers(response.data)
    };
    const [getKonten,setKonten]= useState([]);
    const [user,setUser]= useState([]);
    const getBerita = async () => {
        const response = await Axios.get(`https://s74p83tb-8000.asse.devtunnels.ms/api/detail_berita/${id}`);
        setKonten(response.data);
        fetchUsers(response.data);
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
    const [subscriptionMessage, setSubscriptionMessage] = useState('');

    const handleSubscription = async () => {
        try {
            const email = localStorage.getItem('email'); // Ambil email dari localStorage
            console.log(email);
            if (!email) {
                setSubscriptionMessage('Anda harus login terlebih dahulu.');
                return;
            }

            const response = await Axios.post('http://localhost:8000/api/send-update-email', { email });

            if (response.status === 200) {
                setSubscriptionMessage('Email berhasil dikirim!');
            } else {
                setSubscriptionMessage('Gagal mengirim email.');
            }
        } catch (error) {
            console.error('Error subscribing:', error);
            setSubscriptionMessage('Gagal mengirim emailss.');
        }
    };
    return(
        <div className="my-12">
            <div className="text-left my-3">
                <Link to='/berita'><FontAwesomeIcon icon={faAngleLeft}/> Semua Berita</Link>
            </div>
            {getKonten.map((item,idx)=>(
                <div key={idx} className="flex flex-col justify-between">
                    <div>
                        <h1 className="text-4xl font-semibold text-left mt-5 mb-5">{item.Judul}</h1>
                        <img className="mr-12 w-full" src={`/berita/${item.Gambar}`} alt="" />
                    </div>
                    <div className="w-96 flex justify-start text-left my-5">
                        <div className="mr-5">
                            <h3 className="text-md font-light">Ditulis Oleh</h3>
                            <h3 className="text-md font-bold">{user[item.ID_User]}</h3>
                        </div>
                        <div>
                            <h5 className="text-md font-light">Dipublish Pada</h5>
                            <h5 className="text-md font-bold">{formatDate(item.Waktu)}</h5>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="text-left">
                            <h2 className="text-3xl font-bold font-serif">JURNAL FLORES | FLORA & FAUNA</h2>
                            <p className="my-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident tenetur excepturi voluptate molestiae quis et, ad eius veritatis dolores facere saepe ullam est quos animi explicabo maiores id eligendi perspiciatis ea cumque! Similique, molestias dicta! Eaque, harum adipisci sed, non, tempore aliquid eius mollitia tempora atque quo nesciunt obcaecati totam.</p>
                        </div>
                        <div className="p-7 m-12 border border-black border-md text-left">
                            <h1 className="text-xl font-bold">Langganan Untuk Selalu Update</h1>
                            <p className="my-5">Berlangganan untuk menerima berita terbaru tentang kenaekaragaman hayati burung di kalimantan ke kotak masuk Anda setiap minggu.</p>
                            <button className="w-full bg-green-800 text-white py-1" onClick={handleSubscription}>Berlangganan</button>
                            <p className="font-base text-sm">{subscriptionMessage}</p>
                        </div>
                    </div>
                    <div className="text-left my-12">
                        <h1 className="text-2xl font-bold">Berita Terait</h1>
                        <h2 className="text-xl font-light">Mungkin anda juga tertarik untuk membaca :</h2>
                        <div className="grid grid-cols-3 gap-6">
                        {other.filter((item_other)=> item_other.ID_Berita !== item.ID_Berita).slice(0,3).map((item_other,id)=>{
                            return(
                                <div key={id} className="flex flex-col justify-between">
                                <div className="flex flex-col justify-around">
                                    <img className="mr-12 w-96 h-96 object-cover" src={`/berita/${item_other.Gambar}`} alt="" />
                                    <div>
                                        <h2 className="text-2xl font-semibold text-left my-3">{item_other.Judul}</h2>
                                        <p className="text-justify">{item_other.Deskripsi}</p>
                                    </div>
                                </div>
                                <div className="flex justify-start mt-5">
                                    <div>
                                        <h3 key={idx} className="text-md border-b-2 border-black">{user[item_other.ID_User]}</h3>
                                        <h5 className="text-md font-light">{formatDate(item_other.Waktu)}</h5>
                                    </div>
                                </div>
                                </div>
                            )
                        })}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Detail_Berita;