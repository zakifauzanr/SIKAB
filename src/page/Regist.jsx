import { useState } from "react";
import loginImage from "../assets/login.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nama, setNama] = useState("")
  const [error, setError] = useState("");

  const isEmailValid = (email) => {
    // Ekspresi reguler untuk memeriksa format email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleRegisterClick = async () => {
    // Validasi input
    if (!email || !password || !nama) {
      setError("Semua field harus diisi");
      return;
    }

    // Validasi format email
    if (!isEmailValid(email)) {
      setError("Format email tidak valid");
      return;
    }

    // Validasi panjang password
    if (password.length < 6) {
      setError("Password harus lebih dari 6 karakter");
      return;
    }

    try {
      // Cek apakah email sudah terdaftar
      const checkEmailResponse = await axios.get(
        // https://65632a51ee04015769a6dd6e.mockapi.io/user/users?email=${email}
      );

      if (checkEmailResponse.data.length > 0) {
        setError("Email sudah terdaftar. Gunakan email lain atau coba Login.");
        return;
      }

      // Kirim data registrasi ke API
      const registerResponse = await axios.post(
        "https://65632a51ee04015769a6dd6e.mockapi.io/user/users",
        { email, password, nama, role: "pasien" } // Sesuaikan dengan kebutuhan
      );

      // Handle respons dari API sesuai kebutuhan
      console.log("Sign Up berhasil:", registerResponse.data);

      // Tambahkan logika navigasi atau tampilkan pesan sukses
      navigate("/login");
    } catch (error) {
      console.error("Error registering user:", error);
      setError("Gagal melakukan registrasi. Silakan coba lagi.");
    }
  };

  return (
    <div className="flex">
      <div className="login h-screen w-[100vw] lg:w-[50vw] flex flex-col justify-center">
        <div className="text-center text-[30px] lg:text-[40px] xl:text-[62px] font-extrabold mb-4">
          DAFTAR
        </div>
        <p className="text-center text-[12px] lg:text-[16px] xl:text-base font-normal mb-3">
          Silahkan Masukan Data Diri Anda
        </p>
        <div className="flex flex-col gap-4 lg:gap-8 xl:gap-8 items-center">
          <div className="w-[260px] lg:w-[480px] flex flex-col items-start">
            <label className="block text-[12px] lg:text-[16px] xl:text-base mb-2">Nama</label>
            <input
              className="w-full h-[40px] rounded-[5px] border-[1px] border-stone-300 px-4 text-[12px] lg:text-[16px] xl:text-base"
              type="text"
              placeholder="Nama"
              value={nama}
              onChange={(e) => {
                setNama(e.target.value);
                setError("");
              }}
            />
          </div>
          <div className="w-[260px] lg:w-[480px] flex flex-col items-start">
            <label className="block text-[12px] lg:text-[16px] xl:text-base mb-2">Email</label>
            <input
              className="w-full h-[40px] rounded-[5px] border-[1px] border-stone-300 px-4 text-[12px] lg:text-[16px] xl:text-base"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
            />
          </div>
          <div className="w-[260px] lg:w-[480px] flex flex-col items-start">
            <label className="block text-[12px] lg:text-[16px] xl:text-base mb-2">Kata Sandi</label>
            <input
              className="w-full h-[40px] rounded-[5px] border-[1px] border-stone-300 px-4 text-[12px] lg:text-[16px] xl:text-base"
              type="password"
              placeholder="Kata Sandi"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
            />
          </div>
          <button
            className="w-[480px] lg:h-[48px] lg:w-[480px] bg-[#294122] rounded-[5px] text-[12px] lg:text-[16px] xl:text-base text-white"
            onClick={handleRegisterClick}
          >
            Daftar
          </button>
          {error && (
            <p className="text-red-500 text-[12px] lg:text-[16px]">{error}</p>
          )}
          <p className="text-[12px] lg:text-base font-normal">
            Sudah Punya Akun?{" "}
            <Link
              to="/login"
              className="text-violet-950 text-[12px] lg:text-[16px] xl:text-base font-normal underline leading-tight"
            >
              Masuk
            </Link>
          </p>
        </div>
      </div>
      <div className='flex flex-1 items-center justify-center'>
        <div className='w-full h-screen hidden lg:flex mx-auto relative'>
          <img
            className='absolute inset-0 w-full h-full object-cover'
            src={loginImage}
            alt=''
          />
        </div>
      </div>
    </div>
  );
}


export default Register;