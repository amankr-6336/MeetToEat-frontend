import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import LastFooter from '../../components/Footer/lastFooter/LastFooter'
import './ContactUs.scss'

function ContactUs() {
  return (
    <div className="contactus">
         <div className="navbarcontactus">
            <Navbar/>
         </div>

         <div className="lastfootercontactus">
            <LastFooter/>
         </div>
    </div>
  )
}

export default ContactUs