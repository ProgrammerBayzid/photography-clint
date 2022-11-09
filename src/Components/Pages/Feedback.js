import React from 'react'
import { FaStar } from 'react-icons/fa'

const Feedback = ({ fdb }) => {
    const { userImg, _id, serviceTitle, reviewerName, feedback, ratting, email } = fdb
    return (
        <tbody className='mb-5'>
            <tr >

                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={userImg} />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{
                                reviewerName
                            }</div>
                            <div className="text-sm opacity-50">{email}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {
                        feedback}
                    <br />

                </td>
                <td className='flex gap-2 items-center'><FaStar className='text-warning'></FaStar>{ratting}</td>

            </tr>
        </tbody>
    )
}

export default Feedback
