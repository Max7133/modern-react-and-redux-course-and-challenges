import { useDispatch, useSelector } from 'react-redux';
import { createRandomSong } from '../data';
import { addSong, removeSong } from '../store'; // importing Action Creator dirrectly

// useDispatch- is going to make use of the contact system to reach up to the Comp hierachy and get access to the dispatch() from the Redux Store
// useSelector - is going to allow to reach up to the Redux Store and access State from inside of it

function SongPlaylist() {
  // when calling this func and pass in an Action Object, it's going to update the State in the same way it was updating it with Reducer stuff
  const dispatch = useDispatch();
  // To Do:
  // Get list of songs
  // Reaching to the Store, for getting the Array of songs, and I want to assign it to this Variable
  const songPlaylist = useSelector(state => {
    // whenever I call useSelector, I need to pass the Selector Func
    // the Selector Func is going to be called with all of these States out of the entire Store
    // And then from this Func, I'm going to return just the part of State the Comp cares about.
    return state.songs;
  });
  const handleSongAdd = song => {
    // To Do:
    // Add song to list of songs
    // When I call this Action Creator, I will also pass some info with the action that is created (a payload), so that the Reducer knows exactly what song I want to add "song"
    dispatch(addSong(song));
  };
  const handleSongRemove = song => {
    // To Do:
    // Remove song from list of songs
    // song - is the Payload
    dispatch(removeSong(song));
  };

  const renderedSongs = songPlaylist.map(song => {
    return (
      <li key={song}>
        {song}
        <button
          onClick={() => handleSongRemove(song)}
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
        <h3 className="subtitle is-3">Song Playlist</h3>
        <div className="buttons">
          <button
            onClick={() => handleSongAdd(createRandomSong())}
            className="button is-link"
          >
            + Add Song to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedSongs}</ul>
    </div>
  );
}

export default SongPlaylist;
