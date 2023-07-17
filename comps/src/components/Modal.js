import ReactDOM from 'react-dom';

function Modal() {
  return ReactDOM.createPortal(
    // 1st Argument - all the JSX I want to show
    <div>
      <div className="absolute inset-0 bg-gray-300 opacity-80"></div>
      <div className="absolute inset-40 p-10 bg-white">I'm a modal!</div>
    </div>,
    // 2nd Argument - reference to the DIV I added below before the closing Body Element in index.html </body>
    document.querySelector('.modal-container')
  );
}

export default Modal;
