import { useState, useContext } from 'react'
import {Button, Container,Navbar, Modal} from 'react-bootstrap'
import { CartContext } from "../CartContext";
import CartProduct from "./CartProduct";


const NavbarComponent = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const cart = useContext(CartContext)

  const productsCount = cart.items.reduce((sum,product) => sum + product.quantity, 0)

  return (
    <>
      <Navbar expand="sm">
        <Navbar.Brand href="/">Ecommerce Store</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          <Button onClick={handleShow}>Cart {productsCount} items</Button>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            productsCount > 0 ? 
            <>
              <p>Items in your cart</p>
              {cart.items.map((currentProd, idx) => (
                <CartProduct key={idx} id={currentProd.id} quantity={currentProd.quantity}></CartProduct>
              ))}

              <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>

              <Button variant='success'>Purchase items!</Button>
            </> : 
            <h1>There is no items in your cart!</h1>
          }
        </Modal.Body>
      </Modal>
    </>
  )
}

export default NavbarComponent