import "./RestaurantMenu.css";
import ItemList from "./ItemList";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleUp, faAngleDown} from "@fortawesome/free-solid-svg-icons";
// import { useState } from "react";

const RestaurantCatagory = ({data,showItem, setShowIndex}) =>{
    // console.log(data);
    

    const handleClick = () => {   
      setShowIndex((preIndex) => (preIndex === showItem ? null : showItem));
    }
    
    return(
        <div className="accordion-body">    
        <div className="accordion" onClick={handleClick}>
        <span>{data.title} {data.itemCards.length}</span>
        <span>{showItem ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}</span> 
        </div>
        {showItem && <ItemList items={data?.itemCards}/>}
        </div>
    )
}
export default RestaurantCatagory;