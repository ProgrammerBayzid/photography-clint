import React from 'react'
import { FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Premiem = () => {


    const coursesDetail = useLoaderData();
    const { _id, name, total_view, title, author, details, thumbnail_url, rating, } = coursesDetail;


    const booking = (event) => {
        event.preventDefault()
        toast.success("Thanks for Payment!")

    };
    return (
        <div className='grid lg:grid-cols-2 '>

            <div className='w-72  '>
                <div className='card p-4'>

                    <div>
                        <img src={thumbnail_url} alt="" srcset="" />
                    </div>
                    <h1>ID:{_id}</h1>
                    <h1>Name: {name}</h1>
                    <h1>Price: {rating.price}$</h1>
                </div>
            </div>

            <div className='flex justify-center items-center pt-8'>
                <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
                    <div className='mb-8 text-center'>
                        <h1 className='my-3 text-4xl font-bold'>Fill Up This Form</h1>
                        <p className='text-sm text-dark'>Enter Your Details</p>
                    </div>
                    <form
                        noValidate=''
                        action=''
                        className='space-y-12 ng-untouched ng-pristine ng-valid'
                    >
                        <div className='space-y-4'>
                            <div>
                                <label htmlFor='email' className='block mb-2 text-sm'>
                                    Name
                                </label>
                                <input
                                    type='text'
                                    name='name'
                                    id='name'
                                    placeholder='Enter Your Name Here'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900'
                                    data-temp-mail-org='0'
                                />
                            </div>
                            <div>
                                <label htmlFor='email' className='block mb-2 text-sm'>
                                    Address
                                </label>
                                <input
                                    type='text'
                                    name='address'
                                    id='address'
                                    placeholder='Enter Your Name Here'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900'
                                    data-temp-mail-org='0'
                                />
                            </div>
                            <div>
                                <label htmlFor='email' className='block mb-2 text-sm'>
                                    Email
                                </label>
                                <input
                                    type='email'
                                    name='email'
                                    id='email'
                                    placeholder='Enter Your Email Here'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900'
                                    data-temp-mail-org='0'
                                />
                            </div>
                            <div>
                                <label htmlFor='email' className='block mb-2 text-sm'>
                                    Number
                                </label>
                                <input
                                    type='text'
                                    name='number'
                                    id='number'
                                    placeholder='Enter Your Number'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900'
                                    data-temp-mail-org='0'
                                />
                            </div>
                        </div>
                        <div className='space-y-2'>
                            <div>
                                <button
                                    onClick={booking}
                                    type='submit'
                                    className='w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100'
                                >
                                    Submit Form
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>


        </div>
    )
}

export default Premiem
