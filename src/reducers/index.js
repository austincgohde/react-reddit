import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import posts from './users';

const rootReducer = combineReducers({
    form: formReducer,
    posts
});

export default rootReducer;
