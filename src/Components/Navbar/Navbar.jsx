import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <h1>
      <NavLink to={"/jahon"}>Jahon</NavLink>
      <NavLink to={"/jamiyat"}>Jamiyat</NavLink>
    </h1>
  );
};

export default Navbar;
