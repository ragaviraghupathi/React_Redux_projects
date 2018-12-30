import {combineReducers} from 'redux';
import promoCodeReducer from './promoCodeReducer';

export default combineReducers({
    promoCode : promoCodeReducer
});
