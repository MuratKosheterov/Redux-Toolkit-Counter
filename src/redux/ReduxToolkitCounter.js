import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: { data: 0 },
  reducers: {
    increament: (state, action) => {
      state.data += 1;
    },
    decreament: (state, action) => {
        state.data -= 1;
    },
    reset: (state, action) => {
      state.data = 0
    }
  },
});

export const {increament, decreament, reset} = counterSlice.actions
export default counterSlice.reducer