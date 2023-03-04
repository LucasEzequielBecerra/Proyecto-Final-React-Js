import React from 'react'
import { Link } from 'react-router-dom'
import Item from './Item'



const ItemList = ({ Prod }) => {
    return (

        Prod.map((prod) => <Item key={prod.id} prod={prod} />)

    )
}

export default ItemList