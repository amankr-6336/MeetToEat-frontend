import React from 'react'
import './MailFooter.scss'
function MailFooter() {
  return (
    <div className="mailfooter">
        <div className="innermailfooter">
            <div className="mailfootertop">
                  <h1>Keep up to Date with Us</h1>
                  <h3>For Events and Offers</h3>
            </div>
            <div className="bottommailfooter">
                <input type="email" />
                 <button>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default MailFooter