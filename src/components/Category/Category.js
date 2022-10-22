import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import News from '../News/News';
import NewsSummaryCard from '../newsSummaryCard/NewsSummaryCard';

const Category = () => {
    const categoryNews = useLoaderData();

    return (
        <div>
            <h1 className='bg-primary text-center text-light rounded p-2'>Category News Items: {categoryNews.length}</h1>

            {
                categoryNews.map(news =>
                    <NewsSummaryCard
                        key={news._id}
                        news={news}
                    ></NewsSummaryCard>

                )
            }
        </div>
    )
}

export default Category
