
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = ({ numero }) => {
    return (
        <div className="container-cart"><i className="cart"><FaShoppingCart /> {numero}</i></div>
    )
}

export default CartWidget

