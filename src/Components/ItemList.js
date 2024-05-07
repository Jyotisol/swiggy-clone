import { useDispatch } from "react-redux";
import { CDN_URL } from "../Utils/constant";
import "./RestaurantMenu.css";
import { addItem } from "../Utils/cartSlice";

const ItemList = ({items}) => {

    // console.log(items);
    const dispatch = useDispatch();

  const handleAddItem = (item) => {
   dispatch(addItem(item));
  };

    return(

        <div>
          {items && items.map((item) => (
            <div className="accordion-data"
            key = {item.card.info.id}
            >
            <div>
            <div className="accordion-item">
             <span>{item.card.info.name}</span>
             <div> ₹ <span> 
               {item.card.info.price 
             ? item.card.info.price / 100 
             : item.card.info.defaultPrice / 100} 
             </span></div>
             
             </div>

             <span>
                <img src="https://pngimg.com/uploads/star/star_PNG41514.png"
                 height={10} width={10} 
                 alt="star"/>
                 {item.card.info.ratings?.aggregatedRating?.rating}
                 </span>
             
             </div>
             <div>
             <div className="accordion-btn" >
                <button 
                className="add-btn" 
                onClick = { () => handleAddItem(item)} > ADD </button>
                </div>
                <img className="accordion-img" src={CDN_URL + item.card.info.imageId} height={144} width={156} alt="menu-img" />
            </div>
            </div>
           
          ))}
        </div>
    )
}
export default ItemList;
