import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    replaceMe: () => 'TEST DATA',
    form: formReducer // Use this later for redux
});
