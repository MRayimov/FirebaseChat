import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../utils/firebaseConfig";
import Box from "../Box/Box";
import { useNavigate } from "react-router-dom";
const Home = ({ isAuth }) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);
  console.log(userData);
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(collection(db, "users"));
      setUserData(data.docs.map((doc) => doc.data()));
    };
    getUsers();
  }, []);
  if (!isAuth) {
    navigate("/login");
  }
  function logOut() {
    localStorage.removeItem("isAuth");
    navigate("/login");
  }
  return (
    <div style={{ display: "flex" }}>
      <button onClick={logOut}>Log out</button>
      {userData.map((element) => (
        <Box ism={element.ism} yosh={element.yosh} hobby={element.hobby} />
      ))}
    </div>
  );
};

export default Home;
