import React from 'react'
import { Carousel } from 'antd'

import '../../assets/styles/carousel.css'
import slider1 from '../../assets/images/slider1.jpg'
import slider2 from '../../assets/images/slider2.jpg'
import slider3 from '../../assets/images/slider3.jpg'

const MyCarousel = () => {
    return (
        <Carousel autoplay>
            <div className="carousel-wrap">
                <img src={slider1} alt="" />
            </div>
            <div className="carousel-wrap">
                <img src={slider2} alt="" />
            </div>
            <div className="carousel-wrap">
                <img src={slider3} alt="" />
            </div>
        </Carousel>
    )
}

export default MyCarousel