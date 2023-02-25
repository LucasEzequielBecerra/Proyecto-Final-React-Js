import React from 'react'

const Item = ({ prod }) => {
    return (
        <div className='card'>
            <div className='title'>
                <h2 className='nombre-prod'>{prod.title}</h2>
            </div>
            <div>
                <img src='' alt={prod.title} className='img-prod' />
            </div>
            <div className='contaniner-descripcion'>
                <p className='descrip-prod'>{prod.description}</p>
                <p className='precio-prod'>${prod.price}</p>
                <button className='button-prod'> Hola </button>
            </div>
        </div>
    )
}

export default Item