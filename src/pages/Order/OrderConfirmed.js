import React, { useEffect } from 'react'
import {  useNavigate, useParams } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux';
import { getOrderdetails } from '../../redux/slice/OrderSlice';
import './OrderConfirmed.scss'
import { GiConfirmed } from 'react-icons/gi'
import Lottie from 'lottie-react'
import order1 from '../../assets/order1.json'

function OrderConfirmed() {
    const params = useParams();
    const dispatch = useDispatch();
    const navigate=useNavigate();

    const orderInfo = useSelector(state => state.orderReducer.orderInfo);
   



    useEffect(() => {
        dispatch(getOrderdetails({ _id: params.orderId }));
    }, [dispatch,params])

    return (
        <div className="orderconfirmed">
            <div className="innerorderconfirmed">
                <div className="ordertop">
                    <div className="orderstatus"><h1>Order Confirmed</h1> <GiConfirmed className='ordericon' /></div>

                    <div className="orderandtable">
                        <p className='infoo'>OrderId : {orderInfo?.order?._id}</p>
                        <p className='infoos'>Table Number : {orderInfo?.order?.tableNumbers}</p>
                    </div>



                </div>

                <div className="orderbottom">
                    <div className="leftorder">

                        <div className="leftordertop">
                            <div className="orderdetails"><h2>Order Details</h2></div>

                            <div className="orderlist">
                                <ol>
                                 { orderInfo?.order?.dishes.map((item,key)=>  <li key={key}><p>{item.dishName}</p> <p className='cross'> x </p> <p>{item.quantity}</p></li> )}
                                    {/* <li><p>paneer tikka</p> <p className='cross'> x </p> <p>1</p></li>
                                    <li><p>paneer tikka</p> <p className='cross'> x </p> <p>1</p></li>
                                    <li><p>paneer tikka</p> <p className='cross'> x </p> <p>1</p></li>
                                    <li><p>paneer tikka</p> <p className='cross'> x </p> <p>1</p></li> */}
                                </ol>

                            </div>

                        </div>
                        <div className="leftorderbottom">
                            <h4>Total Amount : Rs {orderInfo?.order?.totalAmount}</h4>
                        </div>
                    </div>

                    <div className="rightorder">
                       <div className="orderanimation">
                           <Lottie animationData={order1} className='animate'/>
                           <h2>Your Food will be ready in 15 min..</h2>
                           <h1>Thank You!!</h1>
                       </div>

                       <div className="backtomenubutton" onClick={()=> navigate('/')}>
                         <button>Explore More</button>
                       </div>

                    </div>
                </div>



            </div>
        </div>
    )
}

export default OrderConfirmed