
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = ({ numero }) => {
    return (
        <div className="container-cart btn btn-outline-success me-2"><i className="cart"><FaShoppingCart /> {numero}</i></div>
    )
}

export default CartWidget

