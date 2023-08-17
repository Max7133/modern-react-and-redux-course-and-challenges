function ExpandablePanel({ header, children }) {
  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center cursor-pointer">
        <div className="flex flex-row items-center justify-between">
          {/* {header} - where the delete button and user's name is going to be displayed */}
          {header}
        </div>
      </div>
      <div className="p-2 border-t">{children}</div>
    </div>
  );
}

export default ExpandablePanel;
