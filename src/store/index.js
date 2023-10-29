const { configureStore } = require('@reduxjs/toolkit');

import { useSelector } from 'react-redux';
import categoriesSlice from './reducers/categories';
import itemsSlice from './reducers/items';

const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    items: itemsSlice,
  },
});

export default store;

export const useAppSelector = useSelector;
