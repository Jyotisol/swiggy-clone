import React, { useEffect, useState } from 'react';
import RestaurantCard, {withPromotedLabel} from './RestaurantCard';
import { RESTURANT_URL } from '../Utils/mockData';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import "./Resturant.css"
import {Link} from "react-router-dom";
import useOnlineStatus from '../Utils/useOnlineStatus';

const RestaurantBody = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState('');

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const apiData = await fetch(RESTURANT_URL);
      const json = await apiData.json();

      // console.log(json);
      const restaurants = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      if (restaurants) {
        setListOfRestaurants(restaurants);
      } else {
        console.error("No restaurants found in API response.");
      }
      } catch (error) {
        console.error("Error fetching data:", error);
      }  
  }
  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false) 
  return(
 <h1>you are offline.. check your internet connection</h1>
  );

  
  return (

        
    <div className='button-body'> 
    <div className='body-container'>
    <p className='Restaurant-para'>Restaurants with online food delivery in Indore</p>
    <div className='button-row'>
    
    <div className='button-line'>
    <div className='button'>
    <div className='filter'>Filter</div>
    </div>
    </div>
   
    <div className='button-line'>
    <div className='button'>
    <div className='sort'>sort by<FontAwesomeIcon icon={faAngleDown} /></div>
    </div>
    </div>

    <div className='button'>
    <div className='content'>
    <div className='content-1'>
    <div className='fast-deliver'>fast delivery</div>
    </div>
    </div>
    </div>

    <div className='button'>
    <div className='content-1'>
    <div className='content'>
    <div className='new-swiggy'>New on swiggy</div>
    </div>
    </div>
    </div>
 
    <div className='button'>
    <div className='content-1'>
    <div className='content'>
    <div className='rating'
    onClick = {() => {
        const filteredList = listOfRestaurants.filter(
          (res) => res.info.avgRating > 4
        );
            setListOfRestaurants(filteredList);
            // console.log(filteredList);
        }}
          >Ratin 4.0+</div>
          </div>
          </div>
          </div>
     
    <div className='button'>
    <div className='content-1'>
    <div className='content'>
    <div className='pure-veg'>Pure veg</div>
    </div>
    </div>
    </div>

    <div className='button'>
    <div className='content-1'>
    <div className='content'>
    <div className='offer'>offer</div>
    </div>
    </div>
    </div>

    <div className='button'>
    <div className='content-1'>
    <div className='content'>
    <div className='rup'>Rs.300-Rs.600</div>
    </div>
    </div>
    </div>
   
    <div className='button'>
    <div className='content-1'>
    <div className='content'>
    <div className='rup'>Less than Rs.300</div>
    </div>
    </div>
    </div>

     <div className='search-bar'>
    <input 
        placeholder='Search for restaurant and food'
        className='searchBox'
        value={searchText}
        onChange = {(e) => {
          setSearchText(e.target.value);
        }}/>

        <div className='search-1'
        onClick = {() =>{
        console.log(searchText);
        const filteredRestaurant = listOfRestaurants.filter((res) =>
        typeof res.info === 'string' && res.info.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredRestaurant(filteredRestaurant);
        }}><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
        </div>
        </div>
        </div>
       
    <div className='res-container'>
      {filteredRestaurant && filteredRestaurant.map((res) => (
        <Link 
        key = {res.info.id} 
        to = {'/restaurants/' + res.info.id}
        >
        {res.info.promoted ? (<RestaurantCardPromoted resData={res}/> 
        ) : (
        <RestaurantCard resData={res} />
        )}
        </Link>
      ))};

      </div>
  </div>
  );
};

export default RestaurantBody;
