const { configureStore } = require('@reduxjs/toolkit');

import { useSelector } from 'react-redux';
import categoriesSlice from './reducers/categories';
import itemsSlice from './reducers/items';
import cartSlice from './reducers/cart';

const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    items: itemsSlice,
    cart: cartSlice,
  },
});

export default store;

export const useAppSelector = useSelector;
