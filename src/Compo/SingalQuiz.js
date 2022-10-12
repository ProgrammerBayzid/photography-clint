import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingalQuiz = ({ uestion }) => {

    const { id, question, correctAnswer, options } = uestion;


    const handleRightAnsClick = values => {
        if (correctAnswer === values) {
            toast.success('Right Answer', { autoClose: 500 })
        }
        else {
            toast.error('Wrong Answer', { autoClose: 500 })
        }
    }



    return (
        <div>

            <h3 className='text-2xl font-bold text-purple-500'>Quiz: <span className='text-xl font-semibold text-black'>{question}</span></h3>
            <div className='relative mb-8'>
                <a href={`#my-modal-${id}`} className="absolute top 0 right-0"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-end w-6 h-6 text-black ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg></a>
                <div>
                    <div className="modal" id={`my-modal-${id}`}>
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Correct Answer!</h3>
                            <p className="py-4">{correctAnswer}</p>
                            <div className="modal-action">
                                <a href="#" className="btn">Close</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid lg:grid-cols-2 gap-5 text-black my-5 '>
                <button onClick={() => handleRightAnsClick(options[0])}>
                    <div className='flex justify-center items-center bg-slate-200 p-5 rounded-md'>
                        <input className='w-5 h-5' type="radio" id="html" name="fav_language" value="HTML" />
                        <p className='ml-3'>{options[0]}</p>
                    </div>
                </button>
                <button onClick={() => handleRightAnsClick(options[1])}>
                    <div className='flex justify-center items-center bg-slate-200 p-5 rounded-md'>
                        <input className='w-5 h-5' type="radio" id="html" name="fav_language" value="HTML" />
                        <p className='ml-3'>{options[1]}</p>
                    </div>
                </button>
                <button onClick={() => handleRightAnsClick(options[2])}>
                    <div className='flex justify-center items-center bg-slate-200 p-5 rounded-md'>
                        <input className='w-5 h-5' type="radio" id="html" name="fav_language" value="HTML" />
                        <p className='ml-3'>{options[2]}</p>
                    </div>
                </button>
                <button onClick={() => handleRightAnsClick(options[3])}>
                    <div className='flex justify-center items-center bg-slate-200 p-5 rounded-md'>
                        <input className='w-5 h-5' type="radio" id="html" name="fav_language" value="HTML" />
                        <p className='ml-3'>{options[3]}</p>
                    </div>
                </button>

            </div>
            <ToastContainer></ToastContainer>
        </div>
    )
}

export default SingalQuiz
