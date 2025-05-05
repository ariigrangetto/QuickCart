export const CartInitialState = JSON.parse(
  window.localStorage.getItem("quickCart") || "[]"
);

export const updateLocalStorage = (state) => {
  window.localStorage.setItem("quickCart", JSON.stringify(state));
};

export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action;

  switch (actionType) {
    case "ADD_TO_CART": {
      const { id } = actionPayload;

      const productInCartIndex = state.findIndex((item) => item.id === id);

      if (productInCartIndex >= 0) {
        const newCart = structuredClone(state);
        newCart[productInCartIndex].quantity += 1;
        updateLocalStorage(newCart);
        return newCart;
      }

      const newState = [
        ...state,
        {
          ...actionPayload, // product
          quantity: 1,
        },
      ];
      updateLocalStorage(newState);
      return newState;
    }

    case "REMOVE_FROM_CART": {
      const { id } = actionPayload;
      const newState = state.filter((item) => item.id !== id);
      updateLocalStorage(newState);
      return newState;
    }

    case "CLEAR_CART": {
      updateLocalStorage(CartInitialState);
      return CartInitialState;
    }
  }

  return state;
};
