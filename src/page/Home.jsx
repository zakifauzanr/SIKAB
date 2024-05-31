import { useEffect } from 'react';
import bgHome from '../assets/bird.png';
import title from '../assets/TitleHome.png';
import Items from '../component/organism/Items';
import Sharing from '../component/organism/Sharing';

function Home(){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []); 
    return(
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
                        <input value='Masukkan Nama/Jenis burung yang ingin kamu cari' type="text" className='py-1 mr-3 pl-1 w-96 text-slate-400'/>
                        <button className='px-5 py-1 button-search'>Cari</button>
                    </div>
                </div>
            </div>
            </div>
            <Items/>
            <Sharing/>
        </div>
    )
}

export default Home;