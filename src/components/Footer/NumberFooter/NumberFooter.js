import React from 'react'
import './NumberFooter.scss'
import {IoCall} from 'react-icons/io5'

function NumberFooter() {
  return (
    <div className="mailfooter">
        <div className="innermailfooter">
            <div className="mailfootertop">
                  <h1>Keep up to Date with Us</h1>
                  <h3>For Events and Offers</h3>
            </div>
            <div className="bottommailfooter">
                <IoCall className='call'/>
                 <h1>8210329345</h1>
            </div>
        </div>
    </div>
  )
}

export default NumberFooter