import React from 'react'
import { createContext } from 'react';
import { FaStar } from 'react-icons/fa'
import { toast } from 'react-toastify';
import { AuthContext } from '../Context/Context';
import { AiFillEdit, AiTwotoneDelete } from 'react-icons/ai';


const Table = ({ review, handelDeeted, handelEdit }) => {
    const { user } = createContext(AuthContext);
    const { serviceImg, userImg, _id, serviceTitle, reviewerName, feedback, ratting, email } = review;



    return (
        <>
            <tbody>
                <tr>
                    <th>
                        <label className='btn'>
                            <AiTwotoneDelete onClick={() => handelDeeted(_id)}></AiTwotoneDelete>
                        </label>
                    </th>
                    <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src={serviceImg} />
                                </div>
                            </div>
                            <div>
                                <div className="font-bold">{
                                    serviceTitle
                                }</div>
                                <div className="text-sm opacity-50">Barishal</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        {
                            feedback}
                        <br />
                        <span className="badge badge-ghost badge-sm">{reviewerName}</span>
                    </td>
                    <td className='flex gap-2 items-center'><FaStar className='text-warning'></FaStar>{ratting}</td>
                    <th>
                        <label htmlFor="my-modal" className="btn"><AiFillEdit></AiFillEdit> </label>
                    </th>
                </tr>
            </tbody>

            <div>
                <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">

                        <form onSubmit={() => handelEdit(_id)}>
                            <div>
                                <div className='grid  lg:grid-cols-2  grid-cols-1 gap-5 mt-5 '>
                                    <input type="text" name='name' placeholder="Name" className="input input-bordered input-sm w-full " defaultValue={reviewerName} />
                                    <input type="text" name='ratting' placeholder="ratting"
                                        defaultValue={ratting}
                                        className="input input-bordered input-sm w-full " />
                                    <textarea required className="textarea textarea-primary"
                                        name='feedback'
                                        placeholder="Type your feedback"
                                        defaultValue={feedback}
                                    >

                                    </textarea>
                                    <p>{reviewerName}</p>
                                    <input type="email" placeholder="email" defaultValue={email} className="input input-bordered input-sm w-full " readOnly />
                                    <button className="btn btn-active btn-secondary " type='submit'> Confirm Edit </button>
                                </div>
                                <div className='text-center mt-5'>

                                </div>
                            </div>
                        </form>


                        <div className="modal-action">
                            <label htmlFor="my-modal" className="btn">X</label>
                        </div>
                    </div>
                </div>
            </div>
            <p>{reviewerName}</p>
        </>
    )
}

export default Table
