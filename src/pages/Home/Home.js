import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Home.scss'
import Main from '../../components/Main/Main'
import Booking from '../../components/Booking/Booking'
import {getTables} from '../../redux/slice/appConfigSlice'
import {useDispatch} from 'react-redux';
import AboutOne from '../../components/About/Aboutone/AboutOne'
import MailFooter from '../../components/Footer/MailFooter/MailFooter'
import AboutTwo from '../../components/About/Abouttwo/AboutTwo'
import NumberFooter from '../../components/Footer/NumberFooter/NumberFooter'
import LastFooter from '../../components/Footer/lastFooter/LastFooter'


function Home() {
   
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(getTables());
  },[dispatch])


  return (
    <div className="Home">
      <div className="navbarhome">
        <Navbar/>
      </div>

      <div className="mainhome">
        <Main/>
      </div>

      <div className="mainbooking">
        <Booking/>
      </div>

      <div className="numberfooterhome">
        <NumberFooter/>
      </div>

      <div className="aboutonehome">
        <AboutOne/>
      </div>

      <div className="mailfooterhome">
        <MailFooter/>
      </div>

      <div className="abouttwohome">
        <AboutTwo/>
      </div>

      <div className="lastfooterhome">
        <LastFooter/>
      </div>

      <div className="blackborder">
        
      </div>
     
    </div>
  )
}

export default Home