import { Link } from 'react-router-dom';
import sikab from '../../assets/sikab2.png';

function FootersHead(){
    return(
        <footer className='mx-16'>
            <div className='flex justify-center'>
                <img className='w-32' src={sikab} alt="" />
            </div>
            <div className='flex items-center justify-center my-5 text-sm lg:text-md font-base'>
                <Link to='/katalog' className=''>Katalog</Link>
                <Link to='/peta' className='ml-3'>Peta Burung</Link>
                <Link to='/berita' className='ml-3'>Berita</Link>
                <Link to='/#' className='ml-3'>Bagikan</Link>
            </div>
        </footer>
    )
}

export default FootersHead;