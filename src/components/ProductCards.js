import React from 'react'
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { CartContext } from "../CartContext";
import { useContext } from "react";

const ProductCards = ({product}) => {
  const cart = useContext(CartContext)
  const productQuantity = cart.getProductQuantity(product.id)

  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>${product.price}</Card.Text>
          { productQuantity > 0 ? 
          <>
            <Form as={Row}>
              <Form.Label column="true" sm="6">In Cart: {productQuantity}</Form.Label>
              <Col sm="6">
                <Button sm="6" className='mx-2' onClick={() => cart.addOneToCart(product.id)}>+</Button>
                <Button sm="6" className='mx-2'onClick={() => cart.removeOneFromCart(product.id)}>-</Button>
              </Col>
            </Form>
            <Button variant='danger' className='my-2' onClick={() => cart.deleteFromCart(product.id)}>Remove from Cart</Button>
          </> :
            <Button variant='primary' onClick={() => cart.addOneToCart(product.id)}>Add to cart</Button>
          }
        </Card.Body>
      </Card>
    </div>
  )
}

export default ProductCards