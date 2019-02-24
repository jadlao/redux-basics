import { combineReducers } from 'redux';
import { appStateReducer } from './appStateReducer';
import { booksDataReducer } from './booksDataReducer';

export default combineReducers({
	globalState: appStateReducer,
	booksData: booksDataReducer
});
