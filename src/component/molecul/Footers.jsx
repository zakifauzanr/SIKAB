import sikab from '../../assets/sikab2.png';

function Footers(){
    return(
        <footer className='mx-16'>
            <div className='flex justify-center'>
                <img className='w-32' src={sikab} alt="" />
            </div>
            <div className='flex items-center justify-center pb-12 border-black border-b-4 my-12'>
                <h1 className=''>Katalog</h1>
                <h1 className='ml-3'>Peta Burung</h1>
                <h1 className='ml-3'>Berita</h1>
                <h1 className='ml-3'>Bagikan</h1>
            </div>
            <div className='flex justify-between mt-12 mb-3'>
                <div><h1>© 2024 Kelompok 8. All rights reserved.</h1></div>
                <div className='flex'>
                    <h1 className=''>Privacy Policy</h1>
                    <h1 className='ml-3'>Terms Policy</h1>
                    <h1 className='ml-3'>Cookies Settings</h1>
                </div>
            </div>
        </footer>
    )
}

export default Footers;