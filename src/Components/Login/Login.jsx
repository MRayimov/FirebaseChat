import React from "react";
import { auth, provider } from "../../utils/firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Login = ({ setIsAuth, isAuth }) => {
  const navigate = useNavigate();
  const googleLogin = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };
  console.log(isAuth);

  return (
    <div>
      Login:
      <button onClick={googleLogin}>Sign In</button>
    </div>
  );
};

export default Login;
