// import { useEffect, useState } from "react"
// import { RES_URL } from "../Utils/constant";
// // import { json } from "react-router-dom";

// const useRestaurantMenu = (resId) => {

//     const[resInfo, setResInfo] = useState(null);

//     useEffect(() => {
//         fetchData();
//       }, []);

//     const fetchData = async () => {
//        const data = await fetch(RES_URL + resId);
//        const json = await data.json();
//        setResInfo(json.data);
//     };
//     console.log(resInfo);
//     return resInfo;
// };
// export default useRestaurantMenu;