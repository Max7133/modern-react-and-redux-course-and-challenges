import { useState } from 'react';
import Button from '../components/Button';
import Modal from '../components/Modal';

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        Accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      {/* the text below will be the 'children' Prop*/}
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis purus
        et libero tincidunt condimentum. Pellentesque sit amet neque lorem.
        Mauris viverra eu est eget aliquet. Praesent ultricies justo sed enim
        gravida, quis iaculis nisi venenatis. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nulla sed urna justo. Duis viverra erat
        quis nisi placerat, in tincidunt mauris vulputate. Ut quis risus a purus
        semper lacinia semper eu ex. Nulla facilisi. Maecenas iaculis lacinia
        massa, ac cursus quam venenatis sit amet. Pellentesque in enim a mauris
        lacinia tempor. Phasellus dapibus viverra arcu eget dignissim. Phasellus
        at nibh eget neque dignissim finibus. Ut vitae risus posuere,
        condimentum leo non, sagittis dolor. Cras ut mattis tellus. Vivamus a
        sem ut quam mollis euismod.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis purus
        et libero tincidunt condimentum. Pellentesque sit amet neque lorem.
        Mauris viverra eu est eget aliquet. Praesent ultricies justo sed enim
        gravida, quis iaculis nisi venenatis. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nulla sed urna justo. Duis viverra erat
        quis nisi placerat, in tincidunt mauris vulputate. Ut quis risus a purus
        semper lacinia semper eu ex. Nulla facilisi. Maecenas iaculis lacinia
        massa, ac cursus quam venenatis sit amet. Pellentesque in enim a mauris
        lacinia tempor. Phasellus dapibus viverra arcu eget dignissim. Phasellus
        at nibh eget neque dignissim finibus. Ut vitae risus posuere,
        condimentum leo non, sagittis dolor. Cras ut mattis tellus. Vivamus a
        sem ut quam mollis euismod.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis purus
        et libero tincidunt condimentum. Pellentesque sit amet neque lorem.
        Mauris viverra eu est eget aliquet. Praesent ultricies justo sed enim
        gravida, quis iaculis nisi venenatis. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nulla sed urna justo. Duis viverra erat
        quis nisi placerat, in tincidunt mauris vulputate. Ut quis risus a purus
        semper lacinia semper eu ex. Nulla facilisi. Maecenas iaculis lacinia
        massa, ac cursus quam venenatis sit amet. Pellentesque in enim a mauris
        lacinia tempor. Phasellus dapibus viverra arcu eget dignissim. Phasellus
        at nibh eget neque dignissim finibus. Ut vitae risus posuere,
        condimentum leo non, sagittis dolor. Cras ut mattis tellus. Vivamus a
        sem ut quam mollis euismod.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis purus
        et libero tincidunt condimentum. Pellentesque sit amet neque lorem.
        Mauris viverra eu est eget aliquet. Praesent ultricies justo sed enim
        gravida, quis iaculis nisi venenatis. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nulla sed urna justo. Duis viverra erat
        quis nisi placerat, in tincidunt mauris vulputate. Ut quis risus a purus
        semper lacinia semper eu ex. Nulla facilisi. Maecenas iaculis lacinia
        massa, ac cursus quam venenatis sit amet. Pellentesque in enim a mauris
        lacinia tempor. Phasellus dapibus viverra arcu eget dignissim. Phasellus
        at nibh eget neque dignissim finibus. Ut vitae risus posuere,
        condimentum leo non, sagittis dolor. Cras ut mattis tellus. Vivamus a
        sem ut quam mollis euismod.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis purus
        et libero tincidunt condimentum. Pellentesque sit amet neque lorem.
        Mauris viverra eu est eget aliquet. Praesent ultricies justo sed enim
        gravida, quis iaculis nisi venenatis. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nulla sed urna justo. Duis viverra erat
        quis nisi placerat, in tincidunt mauris vulputate. Ut quis risus a purus
        semper lacinia semper eu ex. Nulla facilisi. Maecenas iaculis lacinia
        massa, ac cursus quam venenatis sit amet. Pellentesque in enim a mauris
        lacinia tempor. Phasellus dapibus viverra arcu eget dignissim. Phasellus
        at nibh eget neque dignissim finibus. Ut vitae risus posuere,
        condimentum leo non, sagittis dolor. Cras ut mattis tellus. Vivamus a
        sem ut quam mollis euismod.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis purus
        et libero tincidunt condimentum. Pellentesque sit amet neque lorem.
        Mauris viverra eu est eget aliquet. Praesent ultricies justo sed enim
        gravida, quis iaculis nisi venenatis. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nulla sed urna justo. Duis viverra erat
        quis nisi placerat, in tincidunt mauris vulputate. Ut quis risus a purus
        semper lacinia semper eu ex. Nulla facilisi. Maecenas iaculis lacinia
        massa, ac cursus quam venenatis sit amet. Pellentesque in enim a mauris
        lacinia tempor. Phasellus dapibus viverra arcu eget dignissim. Phasellus
        at nibh eget neque dignissim finibus. Ut vitae risus posuere,
        condimentum leo non, sagittis dolor. Cras ut mattis tellus. Vivamus a
        sem ut quam mollis euismod.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis purus
        et libero tincidunt condimentum. Pellentesque sit amet neque lorem.
        Mauris viverra eu est eget aliquet. Praesent ultricies justo sed enim
        gravida, quis iaculis nisi venenatis. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nulla sed urna justo. Duis viverra erat
        quis nisi placerat, in tincidunt mauris vulputate. Ut quis risus a purus
        semper lacinia semper eu ex. Nulla facilisi. Maecenas iaculis lacinia
        massa, ac cursus quam venenatis sit amet. Pellentesque in enim a mauris
        lacinia tempor. Phasellus dapibus viverra arcu eget dignissim. Phasellus
        at nibh eget neque dignissim finibus. Ut vitae risus posuere,
        condimentum leo non, sagittis dolor. Cras ut mattis tellus. Vivamus a
        sem ut quam mollis euismod.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis purus
        et libero tincidunt condimentum. Pellentesque sit amet neque lorem.
        Mauris viverra eu est eget aliquet. Praesent ultricies justo sed enim
        gravida, quis iaculis nisi venenatis. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nulla sed urna justo. Duis viverra erat
        quis nisi placerat, in tincidunt mauris vulputate. Ut quis risus a purus
        semper lacinia semper eu ex. Nulla facilisi. Maecenas iaculis lacinia
        massa, ac cursus quam venenatis sit amet. Pellentesque in enim a mauris
        lacinia tempor. Phasellus dapibus viverra arcu eget dignissim. Phasellus
        at nibh eget neque dignissim finibus. Ut vitae risus posuere,
        condimentum leo non, sagittis dolor. Cras ut mattis tellus. Vivamus a
        sem ut quam mollis euismod.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis purus
        et libero tincidunt condimentum. Pellentesque sit amet neque lorem.
        Mauris viverra eu est eget aliquet. Praesent ultricies justo sed enim
        gravida, quis iaculis nisi venenatis. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nulla sed urna justo. Duis viverra erat
        quis nisi placerat, in tincidunt mauris vulputate. Ut quis risus a purus
        semper lacinia semper eu ex. Nulla facilisi. Maecenas iaculis lacinia
        massa, ac cursus quam venenatis sit amet. Pellentesque in enim a mauris
        lacinia tempor. Phasellus dapibus viverra arcu eget dignissim. Phasellus
        at nibh eget neque dignissim finibus. Ut vitae risus posuere,
        condimentum leo non, sagittis dolor. Cras ut mattis tellus. Vivamus a
        sem ut quam mollis euismod.
      </p>

      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {/* if showModal is true, show Modal component */}
      {showModal && modal}
    </div>
  );
}

export default ModalPage;
