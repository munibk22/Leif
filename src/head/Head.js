import React from 'react'
import './head.css'
import Search from './Search'
import Nav from './Nav'
import { HeadNav } from './HeadNav'
import { HeadSlogan } from './HeadSlogan'
<script src="https://kit.fontawesome.com/494ce4ee7f.js" crossorigin="anonymous"></script>
// import CarouselApp from './Carousel'

export default function Head() {
    return (
        <div className="head relative ">

            <div className="absolute width100">
                <HeadNav />
            </div>

            <div className="flex justify width100 ">
                <Search />
            </div>

            <div className="absolute flex alignitems " style={{ zIndex: '2', bottom: '0px', top: '0px', left: '16%' }}>
                <HeadSlogan />
            </div>
            <div className="  flex alignitems justify "
                style={{ height: '36vh' }}
            >


                <div className=" flex alignitems" style={{ color: "white", fontSize: '3rem' }}>
                    <i class="fas fa-sort-amount-up-alt"></i>

                    <div className="font600 flexwrap alignitems " style={{ padding: '1.5%', width: '500px', lineHeight: '1.1' }}>
                        <h1 style={{ color: "white", fontSize: '2.5rem' }}>Elevate Home Inspections LLC</h1>
                        <div>

                            <ul style={{
                                color: "#069BC2",
                                // color: "  #DEB887 "
                                // color: " #4AAE6E"
                            }}>Your Trusted Home Inspector</ul>
                        </div>
                    </div>

                </div>
            </div>


            <div className=" flex justify " style={{ marginBottom: '-5px' }}>
                <Nav />
            </div>

            <div className="flex justify ">
                {/* <CarouselApp /> */}
            </div>
        </div>
    )
}
