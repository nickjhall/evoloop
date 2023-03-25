import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { breedPopulation } from './populationSlice';

export const Population = () => {
  const population = useSelector(state => state.population);

  const dispatch = useDispatch();

  const onBreedClicked = () => {
    dispatch(
      breedPopulation() // can pass in action payload inside parameters
    )
  }
  return (
    <div>
    <p>Population size:{population.size}</p>
    <button onClick={onBreedClicked}>Breed population</button>
    </div>
  )
}