import { useDispatch, useSelector } from 'react-redux';
import { createRandomMovie } from '../data';
import { addMovie, removeMovie } from '../store'; // importing Action Creator dirrectly

function MoviePlaylist() {
  // when calling this func and pass in an Action Object, it's going to update the State in the same way it was updating it with Reducer stuff
  // useDispatch() does is use the Context System to reach up to the Provider at the very top of the Comp hierarchy and get access to the dispatch() from Redux Store
  const dispatch = useDispatch(); // 1 time per Component
  // To Do:
  // Get list of movies
  const moviePlaylist = useSelector(state => {
    return state.movies;
  });

  const handleMovieAdd = movie => {
    // To Do:
    // Add movie to list of movies
    dispatch(addMovie(movie));
  };
  const handleMovieRemove = movie => {
    // To Do:
    // Remove movie from list of movies
    dispatch(removeMovie(movie));
  };

  const renderedMovies = moviePlaylist.map(movie => {
    return (
      <li key={movie}>
        {movie}
        <button
          onClick={() => handleMovieRemove(movie)}
          className="button is-danger"
        >
          X
        </button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Movie Playlist</h3>
        <div className="buttons">
          <button
            onClick={() => handleMovieAdd(createRandomMovie())}
            className="button is-link"
          >
            + Add Movie to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedMovies}</ul>
    </div>
  );
}

export default MoviePlaylist;
