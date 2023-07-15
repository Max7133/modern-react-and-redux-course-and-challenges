import { GoBell, GoDatabase, GoClock } from 'react-icons/go';
import Button from '../components/Button';

function ButtonPage() {
  const handleClick = () => {};

  return (
    <div>
      <div>
        {/* secondary outline rounded etc.. all Prop names */}
        <Button
          secondary
          outline
          rounded
          className="mb-5"
          onClick={handleClick}
        >
          <GoBell />
          Button 1
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoDatabase />
          Button 2
        </Button>
      </div>
      <div>
        <Button warning>
          <GoClock />
          Button 3
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Button 4
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Button 5
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
