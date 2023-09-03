import React from 'react'
import img1 from '../../assets/image1.jpg';
import img2 from '../../assets/image2.jpg';
import img3 from '../../assets/image3.jpg';
import img4 from '../../assets/image4.jpg'
import img6 from '../../assets/image6.jpg';
import img7 from '../../assets/image7.jpg';
import img8 from '../../assets/image8.jpg';
import img9 from '../../assets/image9.jpg';
import img10 from '../../assets/image10.jpg';
import img11 from '../../assets/image11.jpg';
import img12 from "../../assets/image12.jpg";
import img13 from '../../assets/image13.jpg';
import img14 from '../../assets/image14.jpg'
import img15 from '../../assets/image15.jpg';
import img16 from '../../assets/image16.jpg'
import img17 from '../../assets/image17.jpg';
import img18 from '../../assets/image18.jpg'
import './GalleryCard.scss'


function GalleryCard() {
  
    const data=[
        {
            id:1,
            img:img1
        },
        {
            id:2,
            img:img2
        },
        {
            id:3,
            img:img3
        },
        {
            id:4,
            img:img4
        },
        {
            id:6,
            img:img6
        },
        {
            id:7,
            img:img7
        },
        {
            id:8,
            img:img8
        },
        {
            id:9,
            img:img9
        },
        {
            id:10,
            img:img10,
        },
        {
            id:11,
            img:img11
        },
        {
            id:12,
            img:img12
        },
        {
            id:13,
            img:img13
        },
        {
            id:14,
            img:img14
        },
        {
            id:15,
            img:img15
        },
        {
            id:16,
            img:img16
        },
        {
            id:17,
            img:img17
        },
        {
            id:18,
            img:img18
        }


    ]

    // const[model,setModel]=useState(false);
    // const[temsrc,setTempSrc]=useState('');


    // const getimg =(img) =>{
    //      setTempSrc(img);
    //      setModel(true);
    // }

  return (

    <div className="gallerycard">
           {data.map((item,index)=>{
            return (
                 <div className="pics" key={index}  >
                    <img src={item.img}  style={{width:'100%'}}alt="" />
                 </div>
              )
            
           })

           }
    </div>
  )
}

export default GalleryCard