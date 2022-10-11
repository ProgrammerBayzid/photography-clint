import React from 'react'
import { useLoaderData } from 'react-router'
import SingalQuiz from './SingalQuiz';

const QuixDeteails = () => {
    const quiz = useLoaderData();
    const quizData = quiz.data;
    const { id, total, name, logo, questions, } = quizData;
    return (
        <div className='w-8/12 mx-auto my-5'>
            <h1 className='text-3xl font-bold text-amber-400 text-center mb-7 underline'>Quiz of {name}</h1>
            <div>
                {
                    questions.map(question => <SingalQuiz
                        uestion={question}

                    ></SingalQuiz>

                    )}
            </div>
        </div >
    )
}

export default QuixDeteails
