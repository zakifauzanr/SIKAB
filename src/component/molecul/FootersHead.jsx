import sikab from '../../assets/sikab2.png';

function FootersHead(){
    return(
        <footer className='mx-16'>
            <div className='flex justify-center'>
                <img className='w-32' src={sikab} alt="" />
            </div>
            <div className='flex items-center justify-center my-5'>
                <h1 className=''>Katalog</h1>
                <h1 className='ml-3'>Peta Burung</h1>
                <h1 className='ml-3'>Berita</h1>
                <h1 className='ml-3'>Bagikan</h1>
            </div>
        </footer>
    )
}

export default FootersHead;