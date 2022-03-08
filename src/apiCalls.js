export const getOrders = () => {
  return fetch('http://localhost:3001/api/v1/orders')
      .then(response => response.json())
}

export const postOrders = (order) => {
  return fetch('http://localhost:3001/api/v1/orders', {
    method: 'POST', 
    body: JSON.stringify({
      name: order.name,
      ingredients: order.ingredients
    }), 
    headers: {
      'Content-type': 'application/json'
    }
  })
  .then(response => response.json())
}