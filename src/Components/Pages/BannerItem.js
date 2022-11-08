import React from 'react'
import './BannerItem.css'


const BannerItem = ({ banner }) => {
    const { image, id, prev, next } = banner;

    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='img-gredent'>
                <img src={image} className="w-full rounded-xl" />
            </div>
            <div className="absolute flex justify-end  transform -translate-y-1/2 left-24  top-2/4">
                <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>

                    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> <span className='text-orange-500'>Professional</span> Photographer</h1>
                </div>

            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    )
}

export default BannerItem
