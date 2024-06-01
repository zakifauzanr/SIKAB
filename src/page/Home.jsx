import { useState, useEffect } from 'react';
import axios from 'axios';
import bgHome from '../assets/bird.png';
import title from '../assets/TitleHome.png';
import Items from '../component/organism/Items';
import Sharing from '../component/organism/Sharing';
import { useNavigate } from 'react-router-dom';

function Home() {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/search', {
                params: {
                    keyword: searchTerm
                }
            });
            navigate('/search', { state: { results: response.data } });
        } catch (error) {
            console.error("Error!", error);
        }
    };

    return (
        <div>
            <div className="h-screen">
                <div className="relative container-home my-3 px-10 rounded-2xl bg-home flex justify-center items-center">
                    <div className='absolute left-0 bottom-0 z-0'>
                        <img width={500} src={bgHome} alt="" />
                    </div>
                    <div className='relative text-white z-10'>
                        <h1>Mari Bergabung Melestarikan</h1>
                        <div className='flex justify-center'>
                            <img width={700} src={title} alt="" />
                        </div>
                        <p className='text-center px-32'>Hutan hujan tropis Kalimantan menyimpan kekayaan alam yang luar biasa, termasuk keanekaragaman hayati burung yang tak ternilai. Namun, kelestarian mereka terancam oleh berbagai faktor seperti deforestasi, perburuan liar, dan perdagangan ilegal satwa liar.</p>
                        <div className='mt-12'>
                            <input
                                type="text"
                                className='py-1 mr-3 pl-1 w-96 text-slate-400'
                                placeholder='Masukkan Nama/Jenis burung yang ingin kamu cari'
                                value={searchTerm}
                                onChange={handleInputChange}
                            />
                            <button className='px-5 py-1 button-search' onClick={handleSearch}>Cari</button>
                        </div>
                    </div>
                </div>
            </div>
            <Items/>
            <Sharing />
        </div>
    );
}

export default Home;