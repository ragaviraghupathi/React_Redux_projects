import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

function mapStateToProps(state){
    return{
        posts:state.posts,
        comments:state.comments
        //it assigns state.posts to this.props.posts
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(actionCreators,dispatch);
}
const App= connect(mapStateToProps,mapDispatchToProps)(Main);

export default App;