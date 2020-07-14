import {createStore} from 'redux';
import rootReducer from './reducers';

// example store { user: FirebaseUser, events: [] }
export default createStore(rootReducer, {user: 'Anibal'});
