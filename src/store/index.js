import { createStore, applyMiddleware, compose ,combineReducers} from 'redux';
import thunk from 'redux-thunk'
import homeReducer from '../page/home/reducer'
import imageReducer from '../page/image/reducer'
import postReducer from '../page/post/reducer'
const reducer = combineReducers({
    home:homeReducer,
    image:imageReducer,
    post:postReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(reducer, /* preloadedState, */ composeEnhancers(

    applyMiddleware(thunk)
  ));
  export default store