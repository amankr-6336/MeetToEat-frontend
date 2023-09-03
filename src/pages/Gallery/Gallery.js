import {React,useEffect} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import GalleryCard from '../../components/gallerycard/GalleryCard'
import './Gallery.scss'
import Aboutone from '../../components/About/Aboutone/AboutOne'
import AboutTwo from '../../components/About/Abouttwo/AboutTwo'
import MailFooter from '../../components/Footer/MailFooter/MailFooter'
import NumberFooter from '../../components/Footer/NumberFooter/NumberFooter';
import { useLocation } from 'react-router-dom'

function Gallery() {
   const { pathname } = useLocation();

   useEffect(() => {
     window.scrollTo(0, 0)
    }, [pathname]);
   return (
      <div className="gallery">
         <div className="navbargallery">
            <Navbar />
         </div>

         <div className="aboutonegallery">
            <Aboutone />
         </div>
         <div className="gallerycards">
            <div className="galleryheading">
               <h1>Explore the richness of Food</h1>
               <span className='line'></span>
            </div>

            <div className="innergallerycard">

               <GalleryCard />
            </div>

         </div>

         <div className="mailfootergallery">
            <MailFooter />
         </div>

         <div className="abouttwogallery">
            <AboutTwo />
         </div>

         <div className="numberfootergallery">
            <NumberFooter />
         </div>
      </div>
   )
}

export default Gallery