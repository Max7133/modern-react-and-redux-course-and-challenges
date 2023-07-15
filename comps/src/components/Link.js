import classNames from 'classnames';
import { useContext } from 'react';
import NavigationContext from '../context/navigation';

// to - the path to go to
// children - some text that I want to show inside of the Anchor Element

// the goal of Link Comp, is to make sure that clicking on an Anchor Element will not cause the page to refresh
function Link({ to, children }) {
  const { navigate } = useContext(NavigationContext); // gives back entire Object that is shared, I only take 'navigate' from it

  const classes = classNames('text-blue-500');

  const handleClick = e => {
    // if holding down
    if (e.metaKey || e.ctrlKey) {
      return;
    }
    e.preventDefault();

    // Programatically navigating to some other path
    navigate(to);
  };
  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
