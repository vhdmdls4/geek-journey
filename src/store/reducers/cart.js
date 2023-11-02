import { createSelector, createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    changeCart: (state, { payload }) => {
      const itemExist = state.some((item) => item.id === payload);
      if (!itemExist)
        return [
          ...state,
          {
            id: payload,
            quantity: 1,
          },
        ];
      return state.filter((item) => item.id !== payload);
    },
    changeQuantity: (state, { payload }) => {
      state = state.map((itemInCart) => {
        if (itemInCart.id === payload.id) {
          itemInCart.quantity += payload.quantity;
          return itemInCart;
        }
      });
    },
    resetCart: (state) => (state = initialState),
  },
});

const selectCart = (state) => state.cart;

const selectItems = (state) => state.items;

const search = (state) => state.search;

//memoization de cart

export const selectCartAndTotal = createSelector(
  [selectCart, selectItems, search],
  (cart, items, search) => {
    let total = 0;

    const regexp = new RegExp(search, 'i');

    const cartReduce = cart.reduce((itemsHere, itemInCart) => {
      const item = items.find((item) => item.id === itemInCart.id);

      total += item.price * itemInCart.quantity;

      if (item.title.match(regexp)) {
        itemsHere.push({
          ...item,
          quantity: itemInCart.quantity,
        });
      }

      return itemsHere;
    }, []);

    return {
      cart: cartReduce,
      total,
    };
  }
);

export const { changeCart, changeQuantity, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
