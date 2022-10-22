import React from 'react'
import { useLoaderData } from 'react-router-dom'
import NewsSummaryCard from '../newsSummaryCard/NewsSummaryCard'

const Home = () => {
    const allNews = useLoaderData()
    return (
        <div>
            <h1 className='bg-primary text-center text-light rounded'>All News</h1>
            {
                allNews.map(news =>
                    <NewsSummaryCard
                        key={news._id}
                        news={news}



                    ></NewsSummaryCard>)
            }
        </div>
    )
}

export default Home
