import DropdownPage from './pages/DropdownPage';
import ButtonPage from './pages/ButtonPage';
import AccordionPage from './pages/AccordionPage';
import Link from './components/Link';

function App() {
  return (
    <div>
      <Link to="/accordion">Go to accordion</Link>
      <Link to="/dropdown">Go to dropdown"</Link>
    </div>
  );
}

export default App;
