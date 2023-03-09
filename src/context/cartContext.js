import { createContext, useState } from "react";

const cartContext = createContext({
    cart: []
})

export function CartContextProvider(props) {
    const [cart, setCart] = useState([])



    return (
        <cartContext.Provider value={{ cart }}>
            {props.children}
        </cartContext.Provider>
    )
}

export default cartContext