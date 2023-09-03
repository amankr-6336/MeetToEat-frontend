import {React,useEffect} from 'react'
import mainpic from '../../../assets/lily-banse--YHSwy6uqvk-unsplash (1).jpg'
import './AboutTwo.scss'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

 

function AboutTwo() {

  const navigate=useNavigate();
  
  
 const { pathname } = useLocation();

 useEffect(() => {
   window.scrollTo(0, 0)
  }, [pathname]);


  return (
    <div className="main">
         <img src={mainpic} alt="" />
        <div className="innermain">
            <div className="leftmain">
                  {/* <div className="offerpart">
                       <h1 id='percent'>40%</h1>
                       <h5 id='off'>Opening offer</h5>
                  </div> */}

                  <div className="name">
                    <h2>Meet to Eat</h2>
                  </div>

                  <div className="headline">
                      <h1>Where every ingredient tells a story</h1>
                  </div>

                  <div className="mainbutton">
                      <button className='button' onClick={()=> navigate('/Blog')}>READ MORE</button>
                  </div>
            </div>
            <div className="rightmain">
           
            </div>
        </div>
    </div>
  )
}

export default AboutTwo