import { createStore, applyMiddleware, compose } from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';
import rootReducer from './reducers/index';
import comments from './data/comments';
import posts from './data/posts';

const defaultState={
    posts:posts,
    comments :comments
};
 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store= createStore(rootReducer,defaultState,composeEnhancers(applyMiddleware()));
export const history =syncHistoryWithStore(browserHistory,store);

if(module.hot){
    module.hot.accept('./reducers/',() => {
        const nextRootReducer = require('./reducers/index').default;
        store.replaceReducer(nextRootReducer);
    });
}
export default store;
