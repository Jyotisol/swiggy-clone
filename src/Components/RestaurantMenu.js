import useRestaurants from "../Utils/useRestaurants";
import Shimmer from "../Shimmer";
import { useParams } from "react-router-dom";
import "./RestaurantMenu.css";
import RestaurantCatagory from "./RestaurantCatagory";
import { useState } from "react";

const RestaurantMenu = () => {
    
    const { resId } = useParams();
   const resInfo = useRestaurants(resId)

   const [showIndex, setShowIndex] = useState();


    if(resInfo === 0) return <Shimmer/>

        const {name,cuisines,costForTwoMessage} =  resInfo?.cards[2]?.card?.card?.info;

        const catagoies = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) =>
        c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
        console.log(catagoies);

    return(
        <div className="resMenu">
              <h3>{name}</h3>   
                <p>{cuisines.join(',')- costForTwoMessage}</p>  
      
                {catagoies && catagoies.map((category,index) => (
    <RestaurantCatagory 
        key={category?.card?.card.title} 
        data={category?.card?.card}
        showItem={index === showIndex}
        setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
    />
))}
  
  </div>
)
};

export default RestaurantMenu;


