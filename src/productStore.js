const productsArray = [
  {
    id: "price_1LxXcoHz6jUVw9C988sJLODD",
    title: "Coffee",
    price: 4.99
  },
  {
    id: "price_1LxYVwHz6jUVw9C9yF3x60SG",
    title: "Camera",
    price: 6.03
  },
  {
    id: "price_1LxYUkHz6jUVw9C9rJMpiwK7",
    title: "Sunglasses",
    price: 5.21
  }
]

const getProductData = (id)=> {
  return productsArray.find(product => product.id === id)
}

export { productsArray, getProductData }