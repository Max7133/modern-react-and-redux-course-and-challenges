import { createContext } from 'react';

const NavigationContext = createContext();

// children will be received from Props Object
function NavigationProvider({ children }) {
  // whatever is in the 'value' I share with the rest of the App
  return (
    <NavigationContext.Provider value={{}}>
      {children}
    </NavigationContext.Provider>
  );
}

export { NavigationProvider };
export default NavigationContext;
