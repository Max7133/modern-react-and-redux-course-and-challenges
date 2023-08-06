import { createSlice, nanoid } from '@reduxjs/toolkit';

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    searchTerm: '',
    cars: [], // will grow over time
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      // Assumption:
      // action.payload === { name: 'ab', cost: 140 }
      // I NEED to make sure when the 'action' is dispatched, I provide a Payload that looks like the one I wrote above with 'name' & 'cost'
      // THE REASON is if I won't then this Reducer won't work correctly
      // OTHER REASON this 'carsSlice' CANNOT communicate with 'formSlice'
      state.cars.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(), // random id from redux toolkit
      });
    },
    removeCar(state, action) {
      // Assumption:
      // action.payload === the ID of the car I want to remove
      // I NEED to make sure when the 'action' Object is dispatched, that says to removeCar, I need to be sure that the Payload Property I include the ID of the car I want to remove
      const updated = state.cars.filter(car => {
        return car.id !== action.payload;
      });
      state.cars = updated;
    },
  },
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
