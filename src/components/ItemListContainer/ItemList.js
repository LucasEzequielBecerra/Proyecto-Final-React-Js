import React from 'react'
import Item from './Item'

export const arrProductos = [
    {
        id: 0,
        title: "remera",
        description: "ropa",
        price: 500

    },
    {
        id: 1,
        title: "pantalon",
        description: "ropa",
        price: 1500

    },
    {
        id: 2,
        title: "camisa",
        description: "ropa",
        price: 2500

    },
    {
        id: 3,
        title: "zapatilla",
        description: "ropa",
        price: 3500

    }
]

export const obtenerProductos = new Promise((resolve, rejected) => {
    let url = true

    if (url) {
        setTimeout(() => {
            resolve(arrProductos)
        }, 2000);

    } else {
        rejected("400 not found ")
    }
})

const ItemList = ({ Prod }) => {
    return (
        Prod.map((prod) => <Item key={prod.id} prod={prod} />)
    )
}

export default ItemList