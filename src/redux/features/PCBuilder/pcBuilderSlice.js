import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  components: [],
};

const pcBuilderSlice = createSlice({
  name: "pcBuilder",
  initialState,
  reducers: {
    setComponent: (state, action) => {
      state.components.push(action.payload);
    },
    emptyComponent: (state, action) => {
      state.components = [];
    },
    removeComponent: (state, action) => {
      state.components = state.components.filter(
        (itm) => itm.category._id !== action.payload.category._id
      );
    },
  },
});

export const { removeComponent, setComponent, emptyComponent } =
  pcBuilderSlice.actions;

export default pcBuilderSlice.reducer;
