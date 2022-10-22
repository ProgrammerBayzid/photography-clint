import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import im1 from '../Img/im1.jpg'
import im2 from '../Img/im2.jpg'
import im3 from '../Img/im3.jpg'
const Carouse = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 "
                        src={im1}
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={im2}
                        alt="Second slide"
                    />

                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src={im3}
                        alt="Third slide"
                    />

                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Carouse
