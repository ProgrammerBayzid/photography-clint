import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';
const NewsSummaryCard = ({ news }) => {
    const { _id, total_view, title, author, details, image_url, published_date, rating } = news;
    return (
        <div>

            <Card className="mb-4">
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex'>
                        <Image
                            roundedCircle
                            src={author.img}
                            style={{ height: '50px' }}
                        ></Image>
                        <div className='align-items-center ms-2'>
                            <p className='mb-0'>{author?.name}</p>
                            <p>{author?.published_date}</p>
                        </div>
                    </div>
                    <div >
                        <FaRegBookmark className='me-2'></FaRegBookmark>
                        <FaShareAlt></FaShareAlt>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />

                    <Card.Text>
                        {
                            details.length > 200 ?
                                <>{details.slice(0, 250) + '...'}<Link to={`/news/${_id}`}>see more...</Link></>
                                :
                                <span >{details}</span>
                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between align-items-center">
                    <div className='d-flex align-items-center '>
                        <FaStar className='me-2 text-warning'></FaStar>
                        <span className=''>{rating?.number}</span>
                    </div>
                    <div className='d-flex align-items-center '>
                        <FaEye className='me-2'></FaEye>
                        <span>{total_view}</span>
                    </div>

                </Card.Footer>
            </Card>
        </div>
    )
}

export default NewsSummaryCard
