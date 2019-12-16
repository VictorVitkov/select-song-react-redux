import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { artist: 'Slayer', title: 'Born of Fire', duration: '3:07'},
    { artist: 'Slayer', title: 'Angel of Death', duration: '4:07'},
    { artist: 'Slayer', title: 'Reign in Blood', duration: '4:48'},
    { artist: 'Slipknot', title: 'Psycosocial', duration: '4:43'},
    { artist: 'Slipknot', title: 'Unsainted', duration: '4:53'},
    { artist: 'Slipknot', title: 'Duality', duration: '4:58'},
    { artist: 'Pantera', title: 'A New Level', duration: '3:58'},
    { artist: 'Pantera', title: 'Walk', duration: '5:16'},
    { artist: 'Rage Against The Machine', title: 'Killing In The Name', duration: '5:13'},
    { artist: 'Rage Against The Machine', title: 'People of the Sun', duration: '2:31'},
    { artist: 'Linkin Park', title: 'Somewhere I Belong', duration: '3:33'},
    { artist: 'System of a Down', title: 'Chop Suey', duration: '3:42'},
    { artist: 'System of a Down', title: 'Toxicity', duration: '5:15'},
    { artist: 'Rammstein', title: 'Du Hast', duration: '3:08'},
    { artist: 'Kittie', title: 'What I always Wanted', duration: '3:34'},
    { artist: 'Korn', title: 'Got the Life', duration: '3:45'},
    { artist: 'Ne Obliviscaris', title: 'Forget Not', duration: '12:00'},
    { artist: 'Ne Obliviscaris', title: 'Intra Venus', duration: '7:24'}
  ];
};

const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
