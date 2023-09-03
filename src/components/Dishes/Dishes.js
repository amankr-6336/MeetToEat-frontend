import React from 'react'
import './Dishes.scss'
import {AiOutlinePlusCircle,AiOutlineMinusCircle} from "react-icons/ai"
import {useDispatch} from 'react-redux';
import { addtoCart, removeCart } from '../../redux/slice/cartSlice';

function Dishes({dish}) {
 
 
  const dispatch=useDispatch();

  // useEffect(()=>{
  //   handleAddtoCart()

  // },[setProduct])

  
  async function handleRemoveCart(){
    dispatch(removeCart(dish));

  }
  

  async function handleAddtoCart(){
      // console.log("id",dish)
      // setProduct({...product,dish});
      // console.log(product);
      dispatch(addtoCart(dish));
  }



  return (
    <div className="dishes">
        <div className="innerdishes">
            <div className="dishimage">
                <img id='imagedish' src={dish.image.url} alt="" />
            </div>

            <div className="dishname">
              <div className="details">
                <h2>{dish.dishName}</h2>
                <h4 className='brief'>{dish.brief}</h4>
                <h3 className='price'>₹ {dish.price}</h3>
              </div>

              <div className="orderbuttons">
                   <div className="quantity">
                         <button id='decrement' onClick={handleRemoveCart} ><AiOutlineMinusCircle/></button>
                         <h5>quantity</h5>
                         <button id='increment' onClick={handleAddtoCart}><AiOutlinePlusCircle/></button>
                        
                   </div>
                   <button className='addtocart'onClick={handleAddtoCart}> Add to Cart</button>
              </div>  


            </div>


        </div>
    </div>
  )
}

export default Dishes