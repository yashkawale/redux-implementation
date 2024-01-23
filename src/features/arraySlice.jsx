import { createSlice, nanoid } from "@reduxjs/toolkit";

const arraySlice = createSlice({
  name: "test",
  initialState: {
    testArr: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.testArr.push({ id: nanoid(), word: action.payload });
    },

    removeItem: (state, action) => {
      state.testArr = state.testArr.filter(
        (item) => item.word !== action.payload
      );
    },
  },
});

export const { addItem, removeItem } = arraySlice.actions;

export default arraySlice.reducer;
