import useNavigation from '../hooks/use-navigation';

function Route({ path, children }) {
  // reaching out to Context, for CurrentPath piece of state
  const { currentPath } = useNavigation();

  if (path === currentPath) {
    // then show whatever was provided as the 'children' prop
    return children;
  }
  // not render anything
  return null;
}

export default Route;
