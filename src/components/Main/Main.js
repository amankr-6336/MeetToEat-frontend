import React from 'react'
import './Main.scss'
import mainpic from '../../assets/vegetables-set-left-black-slate.jpg'
import { useNavigate } from 'react-router-dom'

function Main() {

  const navigate=useNavigate();
  return (
    <div className="mains">
         <img src={mainpic} alt="" />
        <div className="innermains">
            <div className="leftmains">
                  <div className="offerparts">
                       <h1 id='percents'>40%</h1>
                       <h5 id='offs'>Opening offer</h5>
                  </div>

                  <div className="names">
                    <h2>Meet to Eat</h2>
                  </div>

                  <div className="headlines">
                      <h1>Where every ingredient tells a story</h1>
                  </div>

                  <div className="mainbuttons">
                      <button className='buttons' onClick={()=> navigate('/gallery')}>READ MORE</button>
                  </div>
            </div>
            <div className="rightmains">
           
            </div>
        </div>
    </div>
  )
}

export default Main