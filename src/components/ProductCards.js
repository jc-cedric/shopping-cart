import React from 'react'
import { Card, Button, Form, Row, Col } from "react-bootstrap";

const ProductCards = ({product}) => {
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>${product.price}</Card.Text>
          <Button variant='primary'>Add to cart</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ProductCards