import React from 'react'

const EditReview = () => {
    return (
        <div>
            <form onSubmit={placeReview}>
                <div>
                    <div className='grid lg:ml-20 lg:grid-cols-2  grid-cols-1 gap-5 mt-5 '>
                        <input type="text" name='name' placeholder="Name" className="input input-bordered input-sm w-full " required />
                        <input type="text" name='ratting' placeholder="ratting" className="input input-bordered input-sm w-full " required />
                        <textarea required className="textarea textarea-primary"
                            name='feedback'
                            placeholder="Type your feedback">

                        </textarea>
                        <input type="email" placeholder="email" defaultValue={user?.email} className="input input-bordered input-sm w-full " readOnly />
                        <button className="btn btn-active btn-secondary " type='submit'>Place Review</button>
                    </div>
                    <div className='text-center mt-5'>

                    </div>
                </div>
            </form>
        </div>
    )
}

export default EditReview
