import React from 'react'
import { toast } from 'react-toastify';
import useTitle from '../../hooks/useTitle';

const AddService = () => {
    useTitle('Add-Service')

    const addService = e => {
        e.preventDefault();
        const service = {
            title: e.target.title.value,
            price: parseInt(e.target.price.value),
            ratting: parseInt(e.target.ratting.value),
            description: e.target.description.value,
            img: e.target.img.value,
        };
        fetch("https://photograghy-server.vercel.app/services", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Service Add Successfully')
                }
            })
            .catch(err => console.log(err));

    }
    return (
        <div>
            <h1 className='px-4 text-center text-2xl sm:text-5xl md:text-3xl lg:text-5xl font-semibold my-10  '> <span className='text-orange-500'>Add </span> Services <br /> </h1>
            <form onSubmit={addService}>
                <div>
                    <div className='grid lg:ml-20 lg:grid-cols-2  grid-cols-1 gap-5 mt-5 '>
                        <input type="text" name='title' placeholder="title" className="input input-bordered input-sm w-full " required />
                        <input type="text" name='price' placeholder="price" className="input input-bordered input-sm w-full " required />
                        <input type="text" name='ratting' placeholder="ratting" className="input input-bordered input-sm w-full " required />
                        <input type="text" name='img' placeholder="URL" className="input input-bordered input-sm w-full " required />
                        <textarea required className="textarea textarea-primary"
                            name='description'
                            placeholder="Type your description">

                        </textarea>
                        <button className="btn btn-active btn-secondary " type='submit'>Add Services</button>
                    </div>
                    <div className='text-center mt-5'>

                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddService
