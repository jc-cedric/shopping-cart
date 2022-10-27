const productsArray = [
  {
    id: 1,
    title: "Coffee",
    price: 4.99
  },
  {
    id: 2,
    title: "Camera",
    price: 6.03
  },
  {
    id: 3,
    title: "Sunglasses",
    price: 5.21
  },
  {
    id: 4,
    title: "Palm oil",
    price: 8.20
  },
  {
    id: 5,
    title: "Strawberrry",
    price: 7.99
  },
  {
    id: 6,
    title: "Furniture",
    price: 4.99
  },
]

const getProductData = (id)=> {
  return productsArray.find(product => product.id === id)
}

export { productsArray, getProductData }