import React from 'react'
import { BsCartCheckFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import './Style.css'

const Item = ({ prod }) => {
    return (

        <div className='card col-lg-2 col-4 d-flex '>
            <Link to={`/product/${prod.id}`}>
                <div className='container-img'>
                    <img src='https://www.artisticarubens.com.ar/media/catalog/product/cache/fe834d3b1b015d6516f54b6ea9487258/a/t/atril-dalerrowney-mini-12x5cm_1.jpg' alt={prod.title} className='img-prod img-fluid' />
                </div>
                <div className='title d-flex '>
                    <p className='nombre-prod'>{prod.title}</p>
                </div>
                <div className='contaniner-description   '>

                    <p className='precio-prod'>${prod.price}</p>
                    <button className='button-prod'>AGREGAR <i className='cart-icon'><BsCartCheckFill /></i></button>
                </div>
            </Link >
        </div>

    )
}

export default Item