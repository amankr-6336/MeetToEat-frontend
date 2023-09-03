import React from 'react'
import './LastFooter.scss'
import {FiMail} from 'react-icons/fi'
import{ FaLocationDot} from 'react-icons/fa6'
import {IoCallOutline} from 'react-icons/io5'
import {useNavigate} from 'react-router-dom'

function LastFooter() {
    const navigate=useNavigate();
  return (
    <div className="lastfooter">
        <div className="innerlastfooter">
            <div className="leftlast">
                  <div className="lefttop">
                       <div className="circle">
                        <div className="innercircle">
                            <h1>40%</h1>
                            <h3>Launch Offer</h3>
                        </div>
                       </div>
                  </div>

                  <div className="leftbottom">
                       <div className="innerleftbottom">
                        <h1>Our Contact</h1>
                        <button className='readmore' onClick={()=> navigate('/AboutUs')}>Read More</button>
                       </div>
                  </div>
            </div>

            <div className="rightlast">
                <div className="innerrightlast">
                    <div className="contactone">
                        <div className="leftcontact">
                            <FiMail className='nub'/>
                        </div>
                        <div className="rightcontact">
                            <h2>CHAT WITH US</h2>

                            <h4>Our friendly team is here</h4>
                            <h3>aman@gmail.com</h3>
                        </div>
                    </div>

                    <div className="contactone">
                        <div className="leftcontact">
                            <FaLocationDot className='nub'/>
                        </div>
                        <div className="rightcontact">
                            <h2>RESTRAUNT</h2>

                            <h4>bistupur jamshedpur, jharkhand pincode :- 831013</h4>
                           
                        </div>
                    </div>

                    <div className="contactone">
                        <div className="leftcontact">
                            <IoCallOutline className='nub'/>
                        </div>
                        <div className="rightcontact">
                            <h2>PHONE</h2>

                            <h3>897897843798</h3>
                           
                        </div>
                    </div>

                </div>
            </div>


        </div>
    </div>
  )
}

export default LastFooter