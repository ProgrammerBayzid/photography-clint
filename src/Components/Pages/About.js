import React from 'react'

import me from '../../assets/img/img-about/me.jpg'

const About = () => {
    return (
        <div>
            <h1 className='px-4 text-center text-2xl sm:text-5xl md:text-3xl lg:text-5xl font-semibold my-10  '> <span className='text-orange-500'>About </span> Myself</h1>

            <div className='grid lg:grid-cols-2 ml-12 gap-5'>
                <div>
                    <h1 className='px-4  text-xl sm:text-5xl md:text-3xl lg:text-4xl  my-10  font-semibold'> <span className='text-orange-500'>Who I am And What I am Do....</span></h1>
                    <h1 className='px-4 ml-10 text-2xl   my-10 '> I am Md: Bayzid Islam Nishat. <br />
                        I am A professional Photographer. <br />
                        Photography is my Passion.

                    </h1>

                </div>
                <div>
                    <img className='lg:w-96 md:w-6o sm:w-44 rounded' src={me} alt="" />
                </div>
            </div>
        </div>
    )
}

export default About
