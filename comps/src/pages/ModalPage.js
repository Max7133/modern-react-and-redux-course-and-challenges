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

  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {/* if showModal is true, show Modal component */}
      {showModal && <Modal onClose={handleClose} />}
    </div>
  ); //
}

export default ModalPage;
