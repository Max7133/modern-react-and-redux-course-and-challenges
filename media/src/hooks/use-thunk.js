import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

export function useThunk(thunk) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  // useCallback() - allows to create a function and only actually redefined that function if it changes in some way (so it won't run infinitely)

  // this is going to run the 'thunk' and 'dispatch' it and update the 'isLoading' & 'error' State
  const runThunk = useCallback(
    arg => {
      setIsLoading(true); // updates State
      // Running Thunk
      // starts the request
      // unwrap() - is going to give a brand new Promise back, and the Promise it gives back is going to follow the CONVENTIONAL RULES
      // dispatch RULES - .then() is called when the request is FULFILLED or REJECTED
      // CONVENTIONAL RULES - .then() ONLY if the request is FULFILLED and .catch() ONLY if the request REJECTED
      dispatch(thunk(arg)) // needs 'arg' argument for useCallback()
        .unwrap()
        //.then(() => setIsLoading(false)) // I DON'T NEED IT BECAUSE OF finally(), it will run no mater what at the end
        .catch(err => setError(err))
        .finally(() => setIsLoading(false));
    },
    [dispatch, thunk]
  );

  return [runThunk, isLoading, error];
}
