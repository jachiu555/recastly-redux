import Redux from 'redux';
import videoList from '../actions/videoList.js';

let sampleData = [];
var videoListReducer = (state = sampleData, action) => {
  //TODO: define a reducer for the videoList field of our state.
  if (action.type === 'CHANGE_VIDEO_LIST') {
    return action.videos;
  } else {
    return state;
  }
};

export default videoListReducer;
