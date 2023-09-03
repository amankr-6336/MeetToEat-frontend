import React, { useEffect, useState } from 'react'
import Dishes from '../../components/Dishes/Dishes'
import './Dish.scss'
import { useSelector } from 'react-redux'
import Cart from '../../components/cart/Cart';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getActiveTable } from '../../redux/slice/centerSlice';
// import Navbar from '../../components/Navbar/Navbar';
import { FiShoppingCart } from 'react-icons/fi'
import { RxCross1 } from 'react-icons/rx'


function Dish() {
   const dispatch = useDispatch();
   const params = useParams();

   const [click, setClick] = useState(false);

   const ans = useSelector(state => state.centerReducer.topProfile);
   // console.log(ans?.table);

   useEffect(() => {
      dispatch(getActiveTable({ _id: params.tableId }))
   }, [params,dispatch])



   return (
      <>


         <div className="dish">

            <div className="innerdish">
                <div className="menutitle">
                <h1>MENU</h1>
                <span className='line'></span>
                </div>
              
               <div className="dishlist">
                  {ans?.table?.dishes?.map(dish => <Dishes key={dish._id} dish={dish} />)}

                  {/* <Dishes/>
           <Dishes/>
           <Dishes/>
           <Dishes/>
           <Dishes/>
           <Dishes/>
           <Dishes/>
           <Dishes/>
           <Dishes/>
           <Dishes/>
           <Dishes/> */}


               </div>
            </div>
            {!click &&
               <div className="carticon" onClick={() => setClick(!click)}>
                  <FiShoppingCart className='carticons' />
               </div>
            }

            {click &&
               <div className="cartpage" onClick={() => setClick(!click)} >
                  <div className="close">
                     <div className="innerclose">
                        <FiShoppingCart className='carticons' /> <RxCross1 onClick={() => setClick(!click)} />
                     </div>
                  </div>
                  <Cart table={ans?.table?.tableNumber} />
               </div>
            }



         </div>
      </>
   )
}

export default Dish