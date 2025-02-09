export const addToCart = (plant) => ({
  type: "ADD_TO_CART",
  payload: plant,
});

export const removeFromCart = (id) => ({
  type: "REMOVE_FROM_CART",
  payload: id,
});

export const updateQuantity = (id, quantity) => ({
  type: "UPDATE_QUANTITY",
  payload: { id, quantity },
});
