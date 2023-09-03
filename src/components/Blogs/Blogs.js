import React from 'react'
import './Blogs.scss'

function Blogs({ item }) {
    console.log(item)
    return (
        <div className="blogs">
            <div className="innerblogs">
                <div className="blogstop">

                    <div className="topleft">
                        <div className="coverimage">
                            <img src={item.image1} alt="" />
                        </div>
                    </div>

                    <div className="topright">
                        <div className="innertopright">
                            <div className="partone">
                                <h1>{item.Name}</h1>
                                <p>{item.one}</p>
                            </div>


                            <div className="parttwo">
                                <h3>{item.twotitle}</h3>
                                <p>{item.two}</p>
                            </div>

                        </div>

                    </div>

                </div>

                <div className="blogsbottom">

                    <div className="bottomlefts">
                        <div className="innerbottomleft">
                            <div className="partone">
                                <h3>{item.thirdtitle}</h3>
                                <p>{item.third}</p>
                            </div>
                            <div className="parttwo">
                                <h3>{item.fourthtitle}</h3>
                                <p>{item.fourth}</p>
                            </div>
                        </div>


                    </div>

                    <div className="bottomright">
                        <div className="coverimage">
                            <img src={item.image2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs