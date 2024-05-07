// import { useState } from "react";
import "./Search.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";


export const Search= () => {
    
    return(
<>
   <div className="search">
    <input 
    className="search-input"
    placeholder="Search for restaurant and food"/>
    <div className="search-icon">
        <span className="icon"><FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>
        </div>
        </div>
        <div className="media screen and (max-width: 1000px)">
        <h1>Popular Cuisions</h1>
   </div>

      </>
   
    )
};