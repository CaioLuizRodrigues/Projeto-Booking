import "./Nav.css";
import { IoIosSearch } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { IoFilterOutline } from "react-icons/io5";
import logo from "../../assets/img/Bookinglogo.png"

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary"> 
    <div className="navbar-body">
        <div className="logo">
            <a className="navbar-brand" href="#" > 
             <img src={logo} alt="logo" width="100%" height="auto"></img>
            </a> 
        </div>
        <div className="search">
            <button className="bntSearch">
                <IoIosSearch color="black" size="30px"/>
            </button>
            <input  placeholder="Procure seu livro"></input>
        </div>
        <div className="user">
            <a href="#">Entrar/Cadastre-se</a>
        </div>
    </div>
    <div className="navbar-filter">
        <li><a href="#">Drama</a></li>
        <li><a href="#">Ação</a></li>
        <li><a href="#">Terror</a></li>
        <li><a href="#">Comedia</a></li>
        <li><a href="#">Romance</a></li>
        <li><a href="#">Ficção</a></li>
        <li><button><IoFilterOutline size="15px"color="#fff"/></button></li>
    </div> 
    </nav>
  );
}
