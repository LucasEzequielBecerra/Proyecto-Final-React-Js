import React from 'react'
import ItemDetail from './ItemDetail'
import { useState, useEffect } from 'react'
import { arrProductos, getProductById, obtenerProductos } from '../../products/Products'
import { useParams } from 'react-router-dom'




const ItemDetailContainer = ({ }) => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    const params = useParams();
    const idProduct = params.idProduct;


    async function elementFinded() {
        try {
            let respuesta = await getProductById(idProduct)
            setProduct(respuesta)
        }
        catch (err) {
            alert(err)
        }
        finally {
            setLoading(false)
        }

    }

    useEffect(() => {

        elementFinded()

    }, [])

    function onAddToCart(count) {
        alert(`Has agregado ${count} items al carrito`)
    }

    return (
        loading
            ?
            <h1 className='cargando'> CARGANDO...</h1>
            :
            <div>
                <ItemDetail onAddToCart={onAddToCart} key={product.id} prod={product} />
            </div>
    )
}

export default ItemDetailContainer