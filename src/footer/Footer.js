import React from 'react'
import Contact from './Contact'

import './footer.css'
import Social from './Social'

export default function Footer() {
    return (
        <div className="footer relative">

            <div className="flex justify top">
                <h3> Footer</h3>       <div>


                </div>

                {/* <CoinList /> */}
            </div>


            <div className="flex" style={{ width: '100%', zIndex: "1" }}>
                {/* <hr /> */}
                <Social />
            </div>
            <div className="">
                <Contact />
            </div>
            <div className="absolutebottom" style={{ color: 'burlywood' }}>

                <a href="https://munibkhanresume.tk/" target="blank" className="anchor">
                    @Munib Khan </a>
            </div>
        </div>
    )
}
