import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts, getProductsByCategory } from '../../products/Products'
import ItemList from './ItemList'
import './Style.css'

const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [title, setTitle] = useState('')

    const params = useParams()
    const idCategory = params.idCategory

    async function leerDatos() {
        if (idCategory === undefined) {
            try {
                let respuesta = await getProducts()
                setProducts(respuesta)
                setTitle('Novedades')
            }
            catch (err) {
                alert(err)
            }
            finally {
                setLoading(false)
            }
        } else {
            try {
                let respuesta = await getProductsByCategory(idCategory)
                setProducts(respuesta)
                setTitle(idCategory)
            }
            catch (err) {
                alert(err)
            }
            finally {
                setLoading(false)
            }
        }

    }

    console.log(products)

    useEffect(() => {
        leerDatos()
    }, [idCategory])

    return (

        loading
            ?
            <h1 className='cargando'> CARGANDO...</h1>
            :
            <div className='container-cards '>


                <ItemList title={title} Prod={products} />

            </div>

    )
}


export default ItemListContainer