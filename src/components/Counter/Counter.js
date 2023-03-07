import { GrFormSubtract } from "react-icons/gr";
import { GrAdd } from "react-icons/gr";
import { useState } from "react";
import "./Counter.css"

function Counter({ disabled }) {
    const [contador, setContador] = useState(0)

    const incrementar = () => {
        contador !== 20 && setContador(contador + 1)
    }

    const disminuir = () => {
        contador !== 0 && setContador(contador - 1)
    }

    return (
        <div className="container-button">
            <button className='button' onClick={disminuir}><i><GrFormSubtract /></i></button>
            <span>{contador}</span>
            <button className="button" onClick={incrementar}><i><GrAdd /></i></button>
        </div>)

}

export default Counter;