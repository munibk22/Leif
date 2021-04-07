import React from 'react'
import './head/head.css'
import './css/default.css'
import Body from './body/Body'
import './body/body.css'
import Head from './head/Head'
import Banner from './head/Banner'
import Footer from './footer/Footer'
import Search from './head/Search'
import PricePanel from './pricepanel/PricePanel'
import Header2 from './body/Header2'
// import './pricepanel/panel.css'

export default function Home() {
    return (
        <div>



            <div className="" id="home">
                <Head />
            </div>




            <div className="bod flex margin  relative max2000" style={{ maxWidth: '' }}>



                <div className=" max2000 justify width70" style={{ maxWidth: '' }} >
                    <Body />
                </div>


            </div>

            <div className="flex justify margintop10">
                <h1>Pricing Plan </h1>
            </div>
            <div className=" flex justify margintop ">
                <PricePanel />
            </div>

            <div className="margintop15">
                <Footer />
            </div>

        </div>
    )
}
