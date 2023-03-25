import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    'size': 2
};

const populationSlice = createSlice({
  name: 'population',
  initialState,
  reducers: {
    breedPopulation(state, action) {
      state.size += 1;
    }
  }
});

export const { breedPopulation } = populationSlice.actions;

export default populationSlice.reducer;