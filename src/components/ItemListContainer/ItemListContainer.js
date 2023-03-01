import React, { useEffect, useState } from 'react'
import ItemList, { obtenerProductos } from './ItemList'
const ItemListContainer = () => {

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
            <div className='container'>
                <h1 className='titulo'>CATALOGO DE PRODUCTOS</h1>
                <div className='lista row justify-content-center'>
                    <ItemList Prod={productos} />
                </div>
            </div>

    )
}


export default ItemListContainer