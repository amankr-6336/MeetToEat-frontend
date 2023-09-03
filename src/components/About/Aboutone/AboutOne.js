import React from 'react'
import mainpic from '../../../assets/brooke-lark-M4E7X3z80PQ-unsplash.jpg'
import './AboutOne.scss'
import { useNavigate } from 'react-router-dom';
function AboutOne() {
   
  const navigate=useNavigate();

  

  return (
    <div className="maino">
         <img src={mainpic} alt="" />
        <div className="innermaino">
            <div className="leftmaino">
                  {/* <div className="offerpart">
                       <h1 id='percent'>40%</h1>
                       <h5 id='off'>Opening offer</h5>
                  </div> */}

                  <div className="nameo">
                    <h2>Meet to Eat</h2>
                  </div>

                  <div className="headlineo">
                      <h1>Where every ingredient tells a story</h1>
                  </div>

                  <div className="mainbuttono">
                      <button className='button' onClick={()=> navigate('/Blog')} >READ MORE</button>
                  </div>
            </div>
            <div className="rightmaino">
           
            </div>
        </div>
    </div>
  )
}

export default AboutOne