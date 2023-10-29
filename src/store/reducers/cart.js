import { createSlice } from '@reduxjs/toolkit';

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
  },
});

export const { changeCart } = cartSlice.actions;

export default cartSlice.reducer;
