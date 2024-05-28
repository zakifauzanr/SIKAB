import PetaBurung from "../data/Peta";

function Peta(){
    return(
        <div className="my-20 text-left">
            <h1 className="text-3xl font-bold text-left">Jelajahi Sebaran Burung di Kalimantan <br/> Dengan Peta Interaktif <br/> Keanekaragaman Hayati Burung</h1>
            <div className='mt-12'>
                <input value='Masukkan Nama/Jenis burung yang ingin kamu cari' type="text" className='border border-md border-black py-1 mr-3 pl-1 w-96 text-slate-400'/>
                <button className='px-5 py-1 button-search text-white'>Cari</button>
            </div>
            <div className="my-12">
                {PetaBurung.map((item,idx)=>(
                    <div className="flex justify-between w-full mb-5" key={idx}>
                        <div className="flex flex-col justify-between">
                            <div>
                                <h3 className="text-md font-semibold">{item.lokasi}</h3>
                                <h2 className="text-3xl font-bold my-3">{item.namaTempat}</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aperiam deleniti nihil dicta veritatis eveniet eum odit rerum pariatur. Eligendi iste nostrum facilis placeat aliquid aliquam atque ullam veniam voluptate, saepe tenetur asperiores ipsa, provident vero? Magnam harum recusandae odit perspiciatis nemo, minus quos tempora illum, modi soluta rerum earum reiciendis deserunt facere ipsum et voluptas! Neque explicabo rem iste aliquam, earum culpa quas iusto harum, error ipsum corrupti est.</p>
                            </div>
                            <button className='bg-green-900 w-fit px-4 py-1 rounded-md text-white'>Lihat</button>
                        </div>
                        <img className="w-96 ml-40" src={item.img} alt="" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Peta;