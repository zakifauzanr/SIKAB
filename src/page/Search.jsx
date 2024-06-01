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
            <h1 className="text-5xl font-bold text-left">Search Results</h1>
            {results && results.length > 0 ? (
                <div className="grid grid-cols-3 gap-8 my-12">
                    {results.map((item, index) => (
                             <div key={index} className="flex flex-col justify-between">
                             <div>
                                 <img className="mr-12" width={600} src={`/berita/${item.Gambar}`} alt="" />
                                 <Link to={`/berita/detail/${item.ID_Berita}`}>
                                     <h2 className="text-2xl font-semibold text-left mt-5 mb-3">{item.Judul}</h2>
                                     <p className="text-justify">{item.Deskripsi}</p>
                                 </Link>
                             </div>
                             <div className="flex justify-start mt-5">
                                 <div>
                                     <h5 className="text-md font-light">{formatDate(item.Waktu)}</h5>
                                 </div>
                             </div>
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
