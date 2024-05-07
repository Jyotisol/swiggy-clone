import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import "./Header.css"
import { clearCart } from "../Utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

      const dispatch = useDispatch();

      const handleClearCart = () => {
        dispatch(clearCart());
      }
   
    return(
        <div className="cart-item">
            <h1>cart</h1>
            <button className="add-item-clear" onClick={handleClearCart}>clear cart</button>
            {cartItems.length === 0 && (
            <h3 className="clear-cart">Your cart is empty...You can go to home page to view more restaurants</h3>
            )}
            <div className="add-Card-Data">
                <ItemList items={cartItems}/>
            </div>
        </div>
    )
}
export default Cart;