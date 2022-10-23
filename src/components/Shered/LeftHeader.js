import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const LeftHeader = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://daragon-news-server.vercel.app/news-categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])
    return (
        <div className='mt-5'>
            <h5 className='bg-primary text-center text-light rounded p-2'>All Category {categories.length}</h5>


            <div>
                {
                    categories.map(category =>


                        <p key={category.id}>
                            <Link to={`/category/${category.id}`}>
                                <Button variant="primary">{category.name}</Button></Link>
                        </p>)
                }
            </div>
        </div>
    )
}

export default LeftHeader
