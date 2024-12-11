import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <>
      <Link to={"/"}>
        <img src={logo} alt="Logo" className="cursor-pointer" />
      </Link>
    </>
  );
}

export default Logo;
