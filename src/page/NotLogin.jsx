import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function NotLogin(){
  const navigate = useNavigate();
    Swal.fire({
        title: "Anda Sudah Login",
        icon: "info",
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ok",
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.removeItem("token");
          navigate("/");
        }
      });
}

export default NotLogin;