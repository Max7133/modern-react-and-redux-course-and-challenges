import { useDispatch, useSelector } from 'react-redux';
import { changeSearchTerm } from '../store';

function CarSearch() {
  const dispatch = useDispatch();

  // for accessing state inside the Store
  const searchTerm = useSelector(state => {
    return state.cars.searchTerm;
  });

  const handleChangeSearchTerm = e => {
    // Payload of whatever the use just typed into the input
    dispatch(changeSearchTerm(e.target.value));
  };

  return (
    <div className="list-header">
      <h3 className="title is-3">My Cars</h3>
      <div className="search field is-horizontal">
        <label className="label">Search</label>
        <input
          className="input"
          value={searchTerm}
          onChange={handleChangeSearchTerm}
        />
      </div>
    </div>
  );
}

export default CarSearch;
