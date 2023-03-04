import React, { useEffect, useState } from 'react'
import { getProducts } from '../../products/Products'
import ItemList from './ItemList'
import './Style.css'

const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    async function leerDatos() {
        try {
            let respuesta = await getProducts()
            setProducts(respuesta)
        }
        catch (err) {
            alert(err)
        }
        finally {
            setLoading(false)
        }

    }

    useEffect(() => {
        leerDatos()
    }, [])

    return (

        loading
            ?
            <h1 className='cargando'> CARGANDO...</h1>
            :
            <div className='container-cards '>
                <h1 className='titulo container'>CATALOGO DE PRODUCTOS</h1>
                <div className='lista row justify-content-center'>
                    <ItemList Prod={products} />
                </div>
            </div>

    )
}


export default ItemListContainer