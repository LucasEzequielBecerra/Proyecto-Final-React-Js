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
        <div className="contenedor-boton">
            <button className='boton' class={disabled} onClick={disminuir}><i><GrFormSubtract /></i></button>
            <span>{contador}</span>
            <button className="boton" onClick={incrementar}><i><GrAdd /></i></button>
        </div>)

}

export default Counter;