import React from 'react'
import './Carting.scss'

function Carting({cart}) {
   
  return (
    <div className="cartitem">
    <div className="innercartitem">
        <div className="imagecartitem">
             <img src={cart.image} alt="" />
        </div>
        <div className="rightdetails">
            <h3 className="cartitemname">
               {cart.title}
            </h3>
            <p>quantity:{cart.quantity}</p>
            <p>Subtotal:{cart.price * cart.quantity}</p>
        </div>
    </div>
</div>
  )
}

export default Carting