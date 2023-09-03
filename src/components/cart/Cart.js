import React from 'react'
import './Cart.scss';
import { useSelector} from 'react-redux';
import Carting from '../Carting/Carting';
import { axiosClient } from '../../utils/AxiosClient';
import { useNavigate } from 'react-router-dom'
import Food1 from '../../assets/Food1.json'
import Lottie from 'lottie-react'






function Cart({table}) {
     const navigate=useNavigate();
    

    const count=useSelector(state=>state.cartReducer.cart);
  
    let totalAmount = 0;
    count.forEach((item) => (totalAmount += item.quantity * item.price));

    let totalItems = 0;
    count.forEach(item => totalItems += item.quantity);
   
   

    async function handleCheckout(){
      try {
        const response=await axiosClient.post('/order/confirmed',{
            products:count,
            tableNumbers:table,
            TotalAmount:totalAmount
        });
        
        navigate(`/order/${response.data.order._id}`)
        return response.data;
        
        
      } catch (error) {
        
      }
    }

  return (
    <div className="cart">
        <div className="innercart">
            
            <div className="cartitemlists">
              {count.map((item)=>(
                <Carting key={item.key} cart={item} />
              ))}

              
            </div>
            { totalItems<1  &&
            <>
            <div className="slogan">
              <h3>Fill me To Fill your tummy</h3>
            </div>
            <Lottie  className='lottie' animationData={Food1}/>
            </>
            }
            { totalItems>0 &&
            <>
            <div className="totalamount">
              <h1 className='totalamounts'>Total Amount : ₹ {totalAmount}</h1>
            </div>
           
            </>

            }

            <button className='placeorder'onClick={handleCheckout} >Place Order</button>
        </div>

    </div>
  )
}

export default Cart