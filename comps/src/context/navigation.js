import { createContext, useState, useEffect } from 'react';

const NavigationContext = createContext();

// children will be received from Props Object
function NavigationProvider({ children }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname); // whatever the current path is, whatever path the user navigated to

  //// NOTE:
  // Window Object EMITS a 'popstate' event if the user current url was added by 'pushState'

  useEffect(() => {
    const handler = () => {
      //When the User navigates around by using those Back and Forward button on the Browser, the 'handler' is going to be called
      //So inside here, it will check at what address the user just navigated to, and going to use that to update the Current Path piece of State
      setCurrentPath(window.location.pathname);
    };
    // Watches for the 'popstate' Event on the 'window' Object, and any time that happens it's going to call the handler()
    window.addEventListener('popstate', handler);
    // and then whenever the NavigationProvider Component is about to be removed from the screen, I will CLEANUP this Event Listener
    return () => {
      window.removeEventListener('popstate', handler);
    };
  }, []); // I only want to run this Arrow Function 1 time, that's why I put []

  // whatever is in the 'value' I share with the rest of the App
  return (
    <NavigationContext.Provider value={{}}>
      {currentPath}
      {children}
    </NavigationContext.Provider>
  );
}

export { NavigationProvider };
export default NavigationContext;
