import {createBrowserRouter, Outlet} from 'react-router-dom';
import Heading from './Components/Heading';
import RestaurantsBody from './Components/RestaurantBody';
import { Help } from './Components/HeaderComponent.js/Help';
import { Search } from './Components/HeaderComponent.js/Search';
// import ScrolCards from './Components/ScrolCards';
import Error from './Components/HeaderComponent.js/Error';
import RestaurantMenu from './Components/RestaurantMenu';
import Home from './Components/HeaderComponent.js/Home';
import {Provider} from "react-redux";
import appStore from './Utils/appStore';
import Cart from './Components/Cart';


const App = () => {
  return (
    <Provider store = {appStore}>
    <div className="App">
      <Heading />
      <Outlet/>
    </div>
    </Provider>
  );
}; 


export const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children: [
      {
        path: "/",
        element: <RestaurantsBody/>
      },
      {
        path: "/home",
        element : <Home/>
      },
      {
        path: "/help",
        element: <Help />
      },
      {
        path: "/search",
        element: <Search/>
      },
      {
      path:"/restaurants/:resId",
       element:<RestaurantMenu/>
      },
      {
      path:"/cart",
      element:<Cart/>
      },
    ],
    
      errorElement:<Error/>,
  }
]);


