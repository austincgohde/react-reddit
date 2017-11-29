import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import posts from './posts';
import comments from './comments'

const rootReducer = combineReducers({
    form: formReducer,
    posts,
    comments
});

export default rootReducer;
