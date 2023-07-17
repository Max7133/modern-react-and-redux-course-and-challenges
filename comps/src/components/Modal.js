import ReactDOM from 'react-dom';
import { useEffect } from 'react';

function Modal({ onClose, children, actionBar }) {
  useEffect(() => {
    // this won't let me scroll down
    document.body.classList.add('overflow-hidden');
    // clean up func, which will be called after the Modal is removed
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  return ReactDOM.createPortal(
    // 1st Argument - all the JSX I want to show
    <div>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-gray-300 opacity-80"
      ></div>
      <div className="fixed inset-40 p-10 bg-white">
        <div className="flex flex-col justify-between h-full">
          {children}
          <div className="flex justify-end">{actionBar}</div>
        </div>
      </div>
    </div>,
    // 2nd Argument - reference to the DIV I added below before the closing Body Element in index.html </body>
    document.querySelector('.modal-container')
  );
}

export default Modal;
