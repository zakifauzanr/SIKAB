import { useState, useEffect } from 'react';
import axios from 'axios';
import bgHome from '../assets/bird.png';
import title from '../assets/TitleHome.png';
import Items from '../component/organism/Items';
import Sharing from '../component/organism/Sharing';
import { useNavigate } from 'react-router-dom';

function Home() {   
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    
    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = async () => {
        try {
            const response = await axios.get('https://s74p83tb-8000.asse.devtunnels.ms/api/search/berita', {
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
            <div className="h-full lg:h-screen">
                <div className="relative container-home my-3 py-12 px-10 rounded-2xl bg-home flex justify-center items-center">
                    <div className='absolute left-0 bottom-0 z-0'>
                        <img className='h-32 lg:h-80 md:h-60 w-auto' src={bgHome} alt="" />
                    </div>
                    <div className='relative text-white z-10'>
                        <h1 className='text-xs lg:text-lg md:text-sm'>Mari Bergabung Melestarikan</h1>
                        <div className='flex justify-center px-0 lg:px-56 md:px-32'>
                            <img className='h-16 lg:h-32 md:h-24 w-full' src={title} alt="" />
                        </div>
                        <p className='text-center px-0 lg:px-32 text-xs lg:text-lg md:text-sm'>Hutan hujan tropis Kalimantan menyimpan kekayaan alam yang luar biasa, termasuk keanekaragaman hayati burung yang tak ternilai. Namun, kelestarian mereka terancam oleh berbagai faktor seperti deforestasi, perburuan liar, dan perdagangan ilegal satwa liar.</p>
                        <div className='mt-5 px-5 lg:px-0'>
                            <input
                                type="text"
                                className='py-1 mr-3 pl-1 w-60 lg:w-96 text-slate-400'
                                placeholder='Masukkan Nama/Jenis burung yang ingin kamu cari'
                                value={searchTerm}
                                onChange={handleInputChange}
                            />
                            <button className='px-5 py-1 button-search mt-3' onClick={handleSearch}>Cari</button>
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