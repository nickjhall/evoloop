import { configureStore } from "@reduxjs/toolkit";

import populationReducer from '../features/population/populationSlice';

export default configureStore({
  reducer: {
    population: populationReducer
  }
})