import React from 'react'

const Item = ({ prod }) => {
    return (
        <div className='card col-lg-5 d-flex '>
            <div className='title d-flex '>
                <h2 className='nombre-prod'>{prod.title}</h2>
            </div>
            <div>
                <img src='' alt={prod.title} className='img-prod' />
            </div>
            <div className='contaniner-descripcion d-flex justify-content-center align-items-center'>
                <p className='descrip-prod'>{prod.description}</p>
                <p className='precio-prod'>${prod.price}</p>
                <button className='button-prod'> Hola </button>
            </div>
        </div>
    )
}

export default Item