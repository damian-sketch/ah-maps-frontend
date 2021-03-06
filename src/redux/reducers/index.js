import { combineReducers } from 'redux';
import articles from './articles';
import signup from './signup';
import login from './login';
import resetpassword from './resetpassword';
import rating from './rating';
import articlelist from './articlesList';
import profileReducer from './profile';
import like from './like';
import comments from './comments';
import commentList from './commentsList';
import tag from './tag';
import search from './search';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
  articles,
  articlelist,
  signup,
  login,
  resetpassword,
  rating,
  profileReducer,
  like,
  comments,
  commentList,
  tag,
  search,
});

export default allReducers;
