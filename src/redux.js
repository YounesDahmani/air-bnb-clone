import { configureStore, createSlice } from "@reduxjs/toolkit";

const navbarSlice = createSlice({
  name: "toggle",
  initialState: useState(false),
  reducers: {
    removeToggle: (state, action) => {
      const nav = state.find((n) => n.id === action.payload);
      nav.done = !nav.done;
    },
  },
});

export const store = configureStore({
  reducer: {
    toggle: navbarSlice.reducer,
  },
});
