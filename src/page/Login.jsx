import { useState, useContext, useEffect } from "react";
import loginImage from "../assets/login.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLoginClick = async () => {
    if (!email || !password) {
      setError("Email dan Password tidak boleh kosong");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/api/getAcc", { email, password });
      const { token } = response.data;
      const decoded = jwtDecode(token);
      const user = { email: decoded.email };

      const expirationTime = new Date(decoded.exp * 1000);
      localStorage.setItem("token", token);
      localStorage.setItem("expirationTime", expirationTime);

      login(user);
      navigate("/");
    } catch (error) {
      console.error("Error fetching user data:", error);
      setError("Terjadi kesalahan. Coba lagi.");
    }
  };

  const handleGoogleSuccess = (response) => {
    const token = response.credential;
    const decoded = jwtDecode(token);
    const user = {
      username: decoded.name,
      email: decoded.email,
    };

    const expirationTime = new Date(decoded.exp * 1000);
    localStorage.setItem("token", token);
    localStorage.setItem("expirationTime", expirationTime);

    login(user);
    navigate("/");
  };

  const handleGoogleFailure = (error) => {
    console.error("Google Login Failed:", error);
    setError("Login dengan Google gagal. Coba lagi.");
  };

  useEffect(() => {
    const checkTokenExpiration = () => {
      const expirationTime = localStorage.getItem("expirationTime");
      if (expirationTime && new Date() > new Date(expirationTime)) {
        localStorage.removeItem("token");
        localStorage.removeItem("expirationTime");
        setError("Session expired. Please login again.");
      }
    };

    checkTokenExpiration();
  }, []);

  return (
    <div className="flex">
      <div className="login h-screen w-[100vw] lg:w-[50vw] flex flex-col justify-center">
        <div className="text-center text-[30px] lg:text-[40px] xl:text-[62px] font-extrabold mb-4">
          MASUK
        </div>
        <p className="text-[16px] lg:text-[20px] xl:text-base font-normal mb-4">
          Silahkan masukan email dan kata sandi kamu ya!
        </p>
        <div className="flex flex-col gap-4 lg:gap-6 xl:gap-8 items-center">
          <input
            className="w-[260px] h-[40px] lg:w-[408px] lg:h-[66px] rounded-[5px] border-[1px] border-stone-300 px-4 text-[12px] lg:text-[16px] xl:text-base"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
          />
          <input
            className="w-[260px] h-[40px] lg:w-[408px] lg:h-[66px] rounded-[5px] border-[1px] border-stone-300 px-4 text-[12px] lg:text-[16px] xl:text-base"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
          />
          <a
            href="forget-password"
            className="text-violet-950 text-[12px] lg:text-[16px] xl:text-base font-normal underline leading-tight"
          >
            Forgot Password?
          </a>
          <button
            className="w-[260px] h-[40px] lg:w-[408px] lg:h-[66px] bg-[#294122] rounded-[5px] text-[12px] lg:text-[16px] xl:text-base text-white"
            onClick={handleLoginClick}
          >
            Login
          </button>
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onFailure={handleGoogleFailure}
          />
          {error && (
            <p className="text-red-500 text-[12px] lg:text-[16px]">{error}</p>
          )}
          <p className="text-[12px] lg:text-[16px] xl:text-base font-normal">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-violet-950 text-[12px] lg:text-[16px] xl:text-base font-normal underline leading-tight"
            >
              Sign Up
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

export default Login;
