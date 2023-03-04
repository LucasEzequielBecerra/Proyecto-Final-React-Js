import React from 'react'
import Counter from '../Counter/Counter'
import { BsCartCheckFill, BsHeart } from "react-icons/bs"
import './Style.css'

const ItemDetail = ({ prod }) => (
    <div className='container item-detail'>
        <div className='row'>
            <div className='col-lg-6'>
                <div className='container-img'>
                    <picture>
                        <img src='https://www.artisticarubens.com.ar/media/catalog/product/cache/fe834d3b1b015d6516f54b6ea9487258/a/t/atril-dalerrowney-mini-12x5cm_1.jpg' className='img-fluid img-producto' />
                    </picture>
                </div>
            </div>
            <div className='col-lg-6 container-detail'>
                <div className='container-title'>
                    <h3 className='title-product'>{prod.title}</h3>
                </div>

                <div className='container-price'>
                    <span className='price'>${prod.price}</span>
                </div>
                <div className='container-add'>
                    <p className='quantity'>Cantidad</p>
                    <Counter />
                </div>
                <div className='container-cart-button'>
                    <button className='cart-button'>AGREGAR    <i className='cart-icon'><BsCartCheckFill /></i> </button>
                </div>
                <div className='link-fav'>
                    <a > <BsHeart /> Agregar a favoritos</a>
                </div>
                <div className='container-description'>
                    <p className='description'>{prod.description}</p>
                </div>


            </div>
        </div>
    </div>
)

export default ItemDetail