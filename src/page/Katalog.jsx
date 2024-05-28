import Bird from '../data/Bird';

function Katalog(){
    return(
        <div className="my-20 text-left">
            <h1 className="text-3xl font-bold text-left">Jelajahi Keanekaragaman Hayati <br/> Burung yang Menakjubkan</h1>
            <div className='mt-12'>
                <input value='Masukkan Nama/Jenis burung yang ingin kamu cari' type="text" className='border border-md border-black py-1 mr-3 pl-1 w-96 text-slate-400'/>
                <button className='px-5 py-1 button-search text-white'>Cari</button>
            </div>
            <div className="grid grid-cols-4 gap-4 my-8 text-left">
                {Bird.map((item, idx)=>(
                    <div key={idx} className='h-96 flex flex-col justify-between text-left'>
                        <img className='w-72' src={item.img} alt="" />
                        <h2 className='text-xl font-semibold my-3'>{item.nameBird}</h2>
                        <p className='mb-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, cum!</p>
                        <button className='bg-green-900 w-fit px-4 py-1 rounded-md text-white'>Lihat</button>
                    </div>
                ))}
                {Bird.map((item, idx)=>(
                    <div key={idx} className='h-96 flex flex-col justify-between text-left'>
                        <img className='w-72' src={item.img} alt="" />
                        <h2 className='text-xl font-semibold my-3'>{item.nameBird}</h2>
                        <p className='mb-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, cum!</p>
                        <button className='bg-green-900 w-fit px-4 py-1 rounded-md text-white'>Lihat</button>
                    </div>
                ))}
                {Bird.map((item, idx)=>(
                    <div key={idx} className='h-96 flex flex-col justify-between text-left'>
                        <img className='w-72' src={item.img} alt="" />
                        <h2 className='text-xl font-semibold my-3'>{item.nameBird}</h2>
                        <p className='mb-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, cum!</p>
                        <button className='bg-green-900 w-fit px-4 py-1 rounded-md text-white'>Lihat</button>
                    </div>
                ))}
                {Bird.map((item, idx)=>(
                    <div key={idx} className='h-96 flex flex-col justify-between text-left'>
                        <img className='w-72' src={item.img} alt="" />
                        <h2 className='text-xl font-semibold my-3'>{item.nameBird}</h2>
                        <p className='mb-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, cum!</p>
                        <button className='bg-green-900 w-fit px-4 py-1 rounded-md text-white'>Lihat</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Katalog;