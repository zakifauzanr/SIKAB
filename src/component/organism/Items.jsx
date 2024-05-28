import category from '../../assets/category.png';
import berita from '../../assets/berita.png';
import map from '../../assets/map.png';
import { Link } from 'react-router-dom';

function Items(){
    return(
        <div className="h-56 grid grid-cols-3 gap-6 mb-12">
            <div className='flex flex-col justify-between'>
                <div className='flex justify-center'>
                    <img className='w-8' src={category} alt="" />
                </div>
                <h1 className='font-bold my-4 text-xl'>Katalog</h1>
                <p>Temukan data dan informasi detail tentang ratusan spesies burung di Kalimantan, termasuk gambar, suara, dan status populasinya.</p>
                <div className='justify-center flex items-end'>
                    <Link to='/'>Selengkapnya </Link>
                </div>
            </div>
            <div className='flex flex-col justify-between'>
                <div className='flex justify-center'>
                    <img className='w-8' src={map} alt="" />
                </div>
                <h1 className='font-bold my-4 text-xl'>Peta Burung</h1>
                <p>Jelajahi peta sebaran burung di seluruh Kalimantan dan pelajari habitat mereka.</p>
                <div className='justify-center flex items-end'>
                    <Link to='/'>Selengkapnya</Link>
                </div>
            </div>
            <div className='flex flex-col justify-between'>
                <div className='flex justify-center'>
                    <img className='w-8' src={berita} alt="" />
                </div>
                <h1 className='font-bold my-4 text-xl'>Berita</h1>
                <p>Tetap update dengan berita dan artikel terbaru tentang penelitian, konservasi, dan edukasi terkait keanekaragaman hayati burung.</p>
                <div className='justify-center flex items-end'>
                    <Link to='/'>Selengkapnya</Link>
                </div>
            </div>
        </div>
    )
}

export default Items;