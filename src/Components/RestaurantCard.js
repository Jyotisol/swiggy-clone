import { CDN_URL } from '../Utils/constant';
import "./Resturant.css"

const RestaurantCard = (props)  => {
    const {resData } = props;

    const { cloudinaryImageId, 
        cuisines, 
        name, 
        avgRating, 
        deliveryTime,
    } = resData?.info;

    return (
        <>
            <div className="res-data">
            <div className='res-body'>
            <img
                className='res-logo'
                 alt='logo'
                src={
                    CDN_URL +
                    cloudinaryImageId
                }/>
                <div className="menu-card">
                <h3>{name}</h3>
                <h4>{avgRating} . {deliveryTime}mins</h4>
                <p>{cuisines.join(',')}</p>
               </div>
                </div>
        </div>
        </>
    );
};

export const withPromotedLabel = (RestaurantCard) =>{
    return(props) => {
        return(
            <div>
                <label className='promoted'>PROMOTED</label>
                <RestaurantCard {...props} />
            </div>
        );
    };
};
export default RestaurantCard