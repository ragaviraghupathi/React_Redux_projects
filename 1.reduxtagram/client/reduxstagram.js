// let's go!
import React from 'react';
import {render} from 'react-dom';
import css from './styles/style.styl';
import App from './components/App';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';
import {Provider} from 'react-redux';
import store, {history} from './store';

const router=(
<Provider store={store}>
    <Router history={history}>
        <Route path="/" component={App}>
            <IndexRoute component={PhotoGrid} />
            <Route path="/view/:postId" component={Single}/>
        </Route>
    </Router>
</Provider>
)

render(router,document.getElementById('root'));

