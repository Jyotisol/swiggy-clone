
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass,faLifeRing, faUser, faCartPlus, faAngleDown} from "@fortawesome/free-solid-svg-icons";
import { LOGO_URL } from "../Utils/constant";
import "./Header.css";
import {Link} from "react-router-dom"
import { useState } from "react";
import HeaderSearchForm from "./HeaderSingForm";
import { useSelector } from "react-redux";


const Heading = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [nameInput, setNameInput] = useState("");


  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
    

    return(
      
      <div className="heading">
        
        <Link to = "/Home">
          <img src = {LOGO_URL} height={50}className="swiggy-logo" alt='logo-img'/>
          </Link>
          <p className='other-option'>Other <FontAwesomeIcon icon={faAngleDown} color='orange' fontSize={20}/></p>
        <ul className='list-item'>

          <Link to ="/search">
        <li className='list'>
          <FontAwesomeIcon icon={faMagnifyingGlass} 
          className='font'/>
           Search</li>
        </Link>
        <Link to = "/help">
        <li className='list'><FontAwesomeIcon icon={faLifeRing} className='font' />Help</li>
        </Link>


        <Link to="/">
               <li className='list' id="overlay" onClick={toggleMenu}>
               <FontAwesomeIcon className='font' icon={faUser} />  
               {nameInput ? nameInput : "Sing in"} 
        </li>
           </Link>
            {menuOpen && (
              <HeaderSearchForm
              nameInput={nameInput}
                setNameInput={setNameInput}
               toggleMenu={toggleMenu}
                 />
                 )}


            <Link to ="/cart">
        <li className='list'>
         
          <FontAwesomeIcon icon={faCartPlus}className='font' />
          <span className="add-cart">{cartItems.length}</span> 
          Cart</li></Link>
          
        </ul>
        </div>
       
    );
  };
  export default Heading 





