import React from 'react'
import img2 from '../../assets/img/banner-img/img2.png'
import img3 from '../../assets/img/banner-img/img3.png'
import img4 from '../../assets/img/banner-img/img4.png'
import img5 from '../../assets/img/banner-img/img5.png'
import img6 from '../../assets/img/banner-img/img6.png'
import img7 from '../../assets/img/banner-img/img7.png'
import BannerItem from './BannerItem'

const bannerData = [
    {
        image: img2,
        prev: 6,
        id: 1,
        next: 2
    },
    {
        image: img3,
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: img4,
        prev: 2,
        id: 3,
        next: 4
    },
    {
        image: img5,
        prev: 3,
        id: 4,
        next: 5
    },
    {
        image: img6,
        prev: 4,
        id: 5,
        next: 6
    },
    {
        image: img7,
        prev: 5,
        id: 6,
        next: 1
    }
]



const Banner = () => {


    return (
        <div className="carousel w-full py-10">
            {
                bannerData.map(banner =>
                    <BannerItem
                        key={banner.id}
                        banner={banner}
                    ></BannerItem>)
            }
        </div>
    )
}

export default Banner
