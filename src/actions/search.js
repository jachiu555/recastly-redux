import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import thunk from 'redux-thunk';


var handleVideoSearch = (q) => {

  //TODO:  Write an asynchronous action to handle a video search!

  // return a function that passes in a dispatch callback
  // create options object with respective properties
  // call search youtube function passing in options object, and run dispatch callback on current video, current video list passing in data

  return function (dispatch) {
    let options = {key: YOUTUBE_API_KEY, query: q, max: 5};

    searchYouTube(options, (data) => {
      dispatch(changeVideo(data[0]));
      dispatch(changeVideoList(data));
    });
  };

};

export default handleVideoSearch;
