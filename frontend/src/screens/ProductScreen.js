import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import Rating from '../components/Rating'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listProductDetails } from '../actions/productActions'

const ProductScreen = ({ history, match, color }) => {

    const [quantity, setQuantity] = useState(1)

    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails

    useEffect(() => {
        dispatch(listProductDetails(match.params.id))
    }, [dispatch, match])

    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}?quantity=${quantity}`)
    }

    return (
        <>
            <Link className='btn btn-dark my-3' to='/'>
                <b>Go Back</b>
            </Link>
            {loading ? <Loader /> : error ? < Message variant='danger'>{error}</Message> :
                <Row>
                    <Col md={6}>
                        <Image src={product.image} alt={product.name} fluid />
                    </Col>
                    <Col md={3}>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h3>{product.name}</h3>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <b>Price: Ksh. {product.price} </b>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                Description: {product.description}
                            </ListGroup.Item>

                        </ListGroup>
                    </Col>

                    <Col md={3}>
                        <Card>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Price:</Col>
                                        <Col><strong>${product.price}</strong> </Col>
                                    </Row>
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    <Row>
                                        <Col>Status:</Col>
                                        <Col className='col-quantity-status'> {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'} </Col>
                                    </Row>
                                </ListGroup.Item>

                                {product.countInStock > 0 && (
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Quantity</Col>
                                            <Col>
                                                <Form.Control as='select' value={quantity} onChange={(e) =>
                                                    setQuantity(e.target.value)}>
                                                    {[...Array(product.countInStock).keys()].map((x) => (
                                                        <option key={x + 1} value={x + 1} ></option>
                                                    ))}
                                                </Form.Control>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                )}


                                <ListGroup.Item>
                                    <Button
                                        onClick={addToCartHandler}
                                        className='btn-block'
                                        type='button'
                                        disabled={product.countInStock === 0}>
                                        <strong>ADD TO CART</strong>
                                    </Button>
                                </ListGroup.Item>

                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            }
        </>
    )
}

ProductScreen.defaultProps = {
    color: '#ffffff',
}

export default ProductScreen

