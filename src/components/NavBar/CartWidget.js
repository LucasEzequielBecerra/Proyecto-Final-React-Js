import cartContext from "../../context/cartContext";
import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";


const CartWidget = () => {
    const { cart } = useContext(cartContext)

    const cartCount = cart.length
    console.log(cartCount)

    return (
        <div className="container-cart btn btn-outline-success me-2 cart"><i className="cart-icon"><FaShoppingCart /> </i><p className="cart-number">{cartCount}</p></div>
    )
}

export default CartWidget

