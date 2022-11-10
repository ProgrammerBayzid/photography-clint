import React from 'react'

import pto1 from '../../assets/img/img-galery/pto1.jfif'
import pto2 from '../../assets/img/img-galery/pto2.jpg'
import pto3 from '../../assets/img/img-galery/pto3.webp'
import pto4 from '../../assets/img/img-galery/pto4.jfif'
import pto5 from '../../assets/img/img-galery/pto5.jfif'
import pto6 from '../../assets/img/img-galery/pto6.webp'
import pto7 from '../../assets/img/img-galery/pto7.jfif'
import pto8 from '../../assets/img/img-galery/pto8.jfif'
import pto9 from '../../assets/img/img-galery/pto9.jfif'
import pto10 from '../../assets/img/img-galery/pto10.jfif'
import pto11 from '../../assets/img/img-galery/pto11.jfif'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { useState } from 'react'
import 'react-photo-view/dist/react-photo-view.css';

import { PhotoProvider, PhotoView } from 'react-photo-view'

const gelaryPhotoData = [
    {
        img: pto1,
        id: 1,
    },
    {
        img: pto2,
        id: 2,
    },
    {
        img: pto3,
        id: 3,
    },
    {
        img: pto4,
        id: 4,
    },
    {
        img: pto5,
        id: 5,
    },
    {
        img: pto6,
        id: 6,
    },
    {
        img: pto7,
        id: 7,
    },
    {
        img: pto8,
        id: 8,
    },
    {
        img: pto9,
        id: 9,
    },
    {
        img: pto10,
        id: 10,
    },
    {
        img: pto11,
        id: 11,
    },
]

const PhotoGleary = () => {

    const [image, setImage] = useState({ img: "", id: 0 })
    const viewImage = (img, id) => {
        console.log(img);
        setImage({ img, id })
    }


    return (



        <div className='lg:ml-10'>
            <div data-aos="zoom-out">
                <h1 className='px-4 text-center text-2xl sm:text-5xl md:text-3xl lg:text-5xl font-semibold my-10  '> <span className='text-orange-500'>Photo </span> Gallery</h1>
            </div>



            <div>
                <div>
                    {
                        image.img &&
                        <div
                            style={{
                                width: "100%",
                                height: "100vh",
                                background: 'black',
                                position: 'fixed',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: "center",
                                overflow: 'hidden'
                            }}

                        >

                            <img src={image.img} style={{ width: "auto", maxWidth: '90%', maxHeight: '990%' }} />



                        </div>
                    }
                </div>
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                >
                    <Masonry >
                        {
                            gelaryPhotoData.map(photo => (
                                <PhotoProvider>
                                    <PhotoView src={photo.img}>
                                        <img
                                            data-aos="zoom-in-down"
                                            key={photo.id}
                                            src={photo.img}
                                            style={{ width: '100 %', display: "block", cursor: 'pointer' }}
                                            alt=""
                                            onClick={() => viewImage(photo.img, photo.id)}

                                        />
                                    </PhotoView>
                                </PhotoProvider>

                            ))
                        }
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        </div>

    )
}

export default PhotoGleary
