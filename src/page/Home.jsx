import bgHome from '../assets/bird.png';
import title from '../assets/TitleHome.png';
import Items from '../component/organism/Items';
import Sharing from '../component/organism/Sharing';

function Home(){
    return(
        <div>
            <div className="h-screen">
            <div className="container-home my-3 px-10 rounded-2xl bg-home flex justify-center items-center">
                <div className='text-white'>
                    <h1>Mari Bergabung Melestarikan</h1>
                    <div className='flex justify-center'>
                        <img width={700} src={title} alt="" />
                    </div>
                    <p className='text-center px-24'>Hutan hujan tropis Kalimantan menyimpan kekayaan alam yang luar biasa, termasuk keanekaragaman hayati burung yang tak ternilai. Namun, kelestarian mereka terancam oleh berbagai faktor seperti deforestasi, perburuan liar, dan perdagangan ilegal satwa liar.</p>
                    <div className='mt-12'>
                        <input value='Masukkan Nama/Jenis burung yang ingin kamu cari' type="text" className='py-1 mr-3 pl-1 w-96 text-slate-400'/>
                        <button className='px-5 py-1 button-search'>Cari</button>
                    </div>
                </div>
            </div>
            <div className='absolute left-20 bottom-7'>
                <img width={500} src={bgHome} alt="" />
            </div>
            </div>
            <Items/>
            <Sharing/>
        </div>
    )
}

export default Home;