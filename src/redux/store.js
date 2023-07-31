import { configureStore } from "@reduxjs/toolkit";
import pcBuilderReducer from "./features/PCBuilder/pcBuilderSlice";
import categoryReducer from "./features/category/categorySlice";

export const store = configureStore({
  reducer: {
    pcBuilder: pcBuilderReducer,
    category: categoryReducer,
  },
});
