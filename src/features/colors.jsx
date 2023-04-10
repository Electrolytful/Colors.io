import { createSlice } from "@reduxjs/toolkit";
import colors from "../colors";

export const colorsSlice = createSlice({
  name: "colors",
  initialState: { value: colors },
  reducers: {
    addColor: (state, action) => {
      state.value.push(action.payload);
    },

    destroyColor: (state, action) => {
      state.value = state.value.filter((color) => color != action.payload);
    },
  },
});

export const { addColor, destroyColor } = colorsSlice.actions;
export default colorsSlice.reducer;
