import {React,useEffect} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import pic1 from '../../assets/aboutus.jpg';
import pic2 from '../../assets/abouts2.jpg'
import './AboutUs.scss'
import MailFooter from '../../components/Footer/MailFooter/MailFooter'
import LastFooter from '../../components/Footer/lastFooter/LastFooter'
import { useLocation } from 'react-router-dom'


function AboutUs() {
    const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0)
   }, [pathname]);
 
    return (
        <div className="aboutus">
            <div className="navbarabout">
                <Navbar />
            </div>

            <div className="ourmission">
                <div className="innerourmission">
                    <div className="leftmission">
                        <h4>OUR MISSION</h4>
                        <div className="collective">
                            <h1>About Us</h1>
                            <p>Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing. Law others theirs passed but wishes. You day real less till dear read. Considered use dispatched melancholy sympathize discretion led. Oh feel if up to till like.</p>

                        </div>
                        <button>Meet to Eat</button>

                    </div>
                    <div className="rightmission">
                        <img src={pic1} alt="" />
                    </div>
                </div>
            </div>
            <div className="aboutuscontact">
                <div className="mailfooter">
                    <div className="innermailfooter">
                        <div className="mailfootertop">
                            <h1>We make a small, intimate, and inviting space for an unforgettable meal</h1>
                            <h4>Comfort produce husband boy her had hearing. Law others theirs passed but wishes. You day real less till dear read. Considered use dispatched melancholy sympathize discretion led. Oh feel if up to till like.</h4>
                        </div>
                        <div className="bottommailfooter">
                            <button>Read More</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ourmission">
                <div className="innerourmissions">
                    <div className="leftmission">
                        <h4>OUR MISSION</h4>
                        <div className="collective">
                            <h1>We are not just a restaurant. We are a cultural experience</h1>
                            <p>Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing. Law others theirs passed but wishes. You day real less till dear read. Considered use dispatched melancholy sympathize discretion led. Oh feel if up to till like.</p>

                        </div>
                        <button>Meet to Eat</button>

                    </div>
                    <div className="rightmission">
                        <img src={pic2} alt="" />
                    </div>
                </div>
            </div>

            <div className="mailfooterabout">
                  <MailFooter/>
            </div>

            <div className="lastfooterabout">
               <LastFooter/>
            </div>
           
            <div className="blackborder">
        
             </div>
        </div>
    )
}

export default AboutUs