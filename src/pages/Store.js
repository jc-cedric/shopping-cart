import React from 'react'
import { Row, Col } from "react-bootstrap";
import { productsArray } from "../productStore";
import ProductCards from '../components/ProductCards';

const Store = () => {
  return (
    <>
      <h1 align="center" className='p-3'>Welcome to the store</h1>
      <Row xs={1} md={3} className="g-4">
        {productsArray.map((product, index) => (
          <Col align="center" key={index}>
            <ProductCards product={product}/>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Store