import { GrFormSubtract } from "react-icons/gr";
import { GrAdd } from "react-icons/gr";
import { useState } from "react";
import "./Counter.css"
import { BsCartCheckFill } from "react-icons/bs";

function Counter({ initial, stock, onAddToCart }) {
    const [count, setCount] = useState(initial)

    const increase = () => {
        count < stock && setCount(count + 1)
    }

    const decrease = () => {
        count > initial && setCount(count - 1)
    }

    return (
        <>

            <div className="container-button">
                <button className='button' onClick={decrease}><i><GrFormSubtract /></i></button>
                <span>{count}</span>
                <button className="button" onClick={increase}><i><GrAdd /></i></button>
                <p className="stock-count">El stock disponible es: {stock}</p>

            </div>
            <div className='container-cart-button'>
                <button onClick={() => onAddToCart(count)} className='cart-button'>AGREGAR    <i className='cart-icon'><BsCartCheckFill /></i> </button>
            </div>
        </>
    )

}

export default Counter;