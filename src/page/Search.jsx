import { Link, useLocation } from 'react-router-dom';

function Search() {
    const location = useLocation();
    const { results } = location.state;

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('id-ID', options);
      };
    return (
        <div className='my-12'>
            <h1 className="text-4xl lg:text-5xl w-full lg:w-2/4 font-bold text-left">Search Results</h1>
            {results && results.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-8 my-12">
                    {results.map((item, index) => (
                             <div key={index} className={`flex flex-col justify-between ${
                                results.length % 3 === 1 && index === results.length - 1 ? 'lg:col-start-2 md:col-start-2' : ''
                              }`}>
                             <div>
                                {item.Gambar?(<>
                                    <img className="mr-12 h-96 object-cover" src={`/berita/${item.Gambar}`} alt="" />
                                    <Link to={`/berita/detail/${item.ID_Berita}`}>
                                        <h2 className="text-2xl font-semibold text-left mt-5 mb-3">{item.Judul}</h2>
                                        <p className="text-justify">{item.Deskripsi}</p>
                                    </Link>
                                </>):(<>
                                {item.ID_Burung?(<>
                                    <img className="mr-12 h-96 object-cover" src={`/bird/${item.gambar}`} alt="" />
                                    <Link to={`/galeri/${item.ID_Burung}`}>
                                        <h2 className="text-2xl font-semibold text-left mt-5 mb-3">{item.nama_Burung}</h2>
                                        <p className="text-justify">{item.deskripsi}</p>
                                    </Link>
                                </>):(<>
                                    <img className="mr-12 h-96 object-cover" src={`/peta/${item.gambar}`} alt="" />
                                    <Link to={`/peta/detail/${item.ID_Tempat}`}>
                                        <h2 className="text-2xl font-semibold text-left mt-5 mb-3">{item.nama_Tempat}</h2>
                                        <p className="text-justify">{item.deskripsi}</p>
                                    </Link>
                                </>)}
                                </>)}
                             </div>
                             {item.Waktu? (
                                <div className="flex justify-start mt-5">
                                    <div>
                                        <h5 className="text-md font-light">{formatDate(item.Waktu)}</h5>
                                    </div>
                                </div>
                             ):(<></>)}
                         </div>
                    ))}
                </div>
            ) : (
                <p>No results found</p>
            )}
        </div>
    );
}

export default Search;
