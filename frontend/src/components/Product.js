import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({ product, borderRadius, color }) => {
    return (
        <Card style={{borderRadius}} className='my-3 rounded' id='product-card'>
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} variant='top' />
            </Link>

            <Card.Body style={{borderRadius}}>
                <Link to={`/product/${product._id}`} style={{color}}>
                    <Card.Title as='div' style={{color}}>
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>

                <Card.Text style={{color}} as='div'>
                    <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                </Card.Text>
                
                <Card.Text as='h3'>Ksh. {product.price}</Card.Text>

            </Card.Body>

        </Card>
    )
}

Product.defaultProps = {
    borderRadius: '10rem',
    color: '#ffffff',
}

export default Product
