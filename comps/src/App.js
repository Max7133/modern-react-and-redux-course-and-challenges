import DropdownPage from './pages/DropdownPage';
import ButtonPage from './pages/ButtonPage';
import AccordionPage from './pages/AccordionPage';
import Link from './components/Link';
import Route from './components/Route';

function App() {
  return (
    <div>
      <Link to="/accordion">Go to accordion</Link>
      <Link to="/dropdown">Go to dropdown"</Link>
      <div>
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/dropdown">
          <DropdownPage />
        </Route>
      </div>
    </div>
  );
}

export default App;
