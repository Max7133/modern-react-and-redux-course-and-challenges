import ReactDOM from 'react-dom';

function Modal({ onClose, children, actionBar }) {
  return ReactDOM.createPortal(
    // 1st Argument - all the JSX I want to show
    <div>
      <div
        onClick={onClose}
        className="absolute inset-0 bg-gray-300 opacity-80"
      ></div>
      <div className="absolute inset-40 p-10 bg-white">
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
