import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {

  if (!song) {
    return (
      <div>
        <h3>
          Please select a song
        </h3>
      </div>
    )
  }

  return (
    <div>
      <h3>You have selected: </h3>
      <p>
        Artist: {song.artist}
        <br />
        Title: {song.title}
        <br />
        Duration: {song.duration}
      </p>
    </div>
  )
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail);
