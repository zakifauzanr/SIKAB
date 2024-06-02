import { useState } from 'react';
import sikab from '../../assets/sikab2.png'
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Header() {
  const [isNav, setisNav] = useState(false);
  const isLoggedIn = localStorage.getItem("token") !== null;
  const navigate = useNavigate();
  const toggleNav = () => {
    setisNav(!isNav);
  };

  const logOut = () => {
    Swal.fire({
      title: "Anda yakin untuk Keluar?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, Keluar!",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        navigate("/");
        Swal.fire({
          title: "Keluar Berhasil",
          icon: "success",
        });
      }
    });
  }
  return (
    <nav className="bg-white flex items-center sm:h-auto md:h-20 flex items-center fixed inset-x-0 z-50 border-b-4 border-black">
      <div className="w-full mx-auto grid grid-cols-2 gap-auto lg:flex md:flex justify-between md:justify-evenly lg:items-center md:items-center px-4">
        <Link to='/' className='w-32 lg:w-40'>
        <img
            src={sikab}
            width="100"
            height="100"
            className="inline-block align-top"
            alt="React Bootstrap logo"
        />
        </Link>
        <div
          className="block bg-transparent lg:hidden md:hidden focus:outline-none flex justify-end mt-1"
          onClick={toggleNav}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </div>
        <div className={`lg:flex md:flex lg:flex-grow md:flex-grow lg:space-x-6 md:space-x-8 ml-3 md:ml-5 lg:ml-12 mt-2 lg:mt-0 mb-3 lg:mb-0 ${isNav ? 'block w-screen pr-16 text-center' : 'hidden text-left'}`}>
          <div className='h-24 md:h-full lg:h-full w-full inline-block mt-2 flex justify-around px-0 lg:px-72 flex-col md:flex-row lg:flex-row'>
            <Link
              href='#'
              to="/katalog"
              className="block lg:inline-block text-black hover:text-gray-400"
            >
              Katalog
            </Link>
            <Link
              href='#'
              to="/peta"
              className="block lg:inline-block text-black hover:text-gray-400"
            >
              Peta Burung
            </Link>
            <Link
              href='#'
              to="/berita"
              className="block lg:inline-block text-black hover:text-gray-400"
            >
              Berita
            </Link>
          </div>
          <div className='w-full lg:w-80 flex flex-col lg:flex-row md:flex-row lg:justify-end md:justify-end justify-center items-left'>
            {isLoggedIn ? (
              <>
                <button onClick={logOut} className='lg:ml-4 inline-block bg-red-800 text-white text-sm px-4 py-2 leading-none rounded border-transparent hover:border-gray-400'>Keluar</button>
              </>
            ) : (
              <Link to='/Login' className="text-center text-white bg-green-800 text-sm px-4 py-2 rounded">Masuk</Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;