import {React,useEffect} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import {data} from '../Blog/BlogData'
import Blogs from '../../components/Blogs/Blogs';
import './BlogPage.scss'
import NumberFooter from '../../components/Footer/NumberFooter/NumberFooter';
import { useLocation } from 'react-router-dom'

function BlogPage() {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0)
   }, [pathname]);
 
   
  return (
     <div className="blog">
        <div className="navbarblog">
            <Navbar/>
        </div>

        <div className="blogpageblog">
          {data.map((item)=>
            <Blogs item={item}/>
          )}
            
        </div>

        <div className="numberfooterblog">
            <NumberFooter/>
        </div>
     </div>
  )
}

export default BlogPage