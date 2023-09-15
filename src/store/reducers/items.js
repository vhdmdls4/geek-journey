const { createSlice } = require('@reduxjs/toolkit');

const initialState = ['teste', 'testei'];

const itemsSlice = createSlice({
  name: 'items',
  initialState,
});

export default itemsSlice.reducer;
