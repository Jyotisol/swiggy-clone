import { useEffect, useState } from "react";
// import { MENU_IMG } from "../Utils/mockData";
import { MENU_API } from "../Utils/constant";


const useRestaurants = (resId) =>{
    const [resInfo, setResInfo] = useState(null);
    
    useEffect(() => {
        fetchMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    

    const fetchMenu = async () =>{
        const data = await fetch(MENU_API + resId)
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    };
    return resInfo;

}
export default useRestaurants;