import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./headerSingForm.css";
import { useState } from "react";



const HeaderSearchForm = ({ nameInput, setNameInput, toggleMenu }) => {
  const [signInOpen, setSignInOpen] = useState();

 
  const toggleSignIn = () => {
    setSignInOpen(!signInOpen); // Toggle signInOpen state to open/close the form
  };
 
  
  return (
    
    <div className="sing-form"> 
      <div className="form">
        <span >
          <FontAwesomeIcon icon={faXmark} onClick={toggleSignIn}/>
           {signInOpen ? toggleMenu : toggleSignIn}
        </span>

        <h3>login</h3>
        <div className="create-acc">
          <p>or</p>
          <Link to="./create">Create an account</Link>
        </div>
        <div className="btn-input">
          <input
            className="name-input"
            type="text"
            placeholder="Name"
            value={nameInput} 
            onChange={(e) => setNameInput(e.target.value)}  
      />
    
          <button
            className="loggin-btn"
            onClick={(e) => {
              console.log(nameInput); // Log the name
                 toggleMenu();
            }} 
          >
            Log in
          </button>
        </div>
      </div>
    </div>
 
  );
};
export default HeaderSearchForm;