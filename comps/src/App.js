import Button from './Button';

function App() {
  return (
    <div>
      <div>
        <Button success rounded outline>
          Button 1
        </Button>
      </div>
      <div>
        <Button danger outline>
          Button 2
        </Button>
      </div>
      <div>
        <Button warning>Button 3</Button>
      </div>
      <div>
        <Button secondary outline>
          Button 4
        </Button>
      </div>
      <div>
        <Button secondary rounded>
          Button 5
        </Button>
      </div>
    </div>
  );
}

export default App;
