import { useContext } from 'react';
import NavigationContext from '../context/navigation';

function Route({ path, children }) {
  // reaching out to Context, for CurrentPath piece of state
  const { currentPath } = useContext(NavigationContext);

  if (path === currentPath) {
    // then show whatever was provided as the 'children' prop
    return children;
  }
  // not render anything
  return null;
}

export default Route;
