import React from 'react'
import ItemDetail from './ItemDetail'
import { useState, useEffect } from 'react'
import { obtenerProductos } from '../ItemListContainer/ItemList'


const ItemDetailContainer = ({ Prod }) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        obtenerProductos.then((respuesta) => setProductos(respuesta))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    })

    return (
        loading
            ?
            <h1 className='cargando'> CARGANDO...</h1>
            :
            <div>

                {Prod.map((prod) => <ItemDetail key={prod.id} prod={prod} />)}
            </div>
    )
}

export default ItemDetailContainer