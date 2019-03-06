import { createStore, applyMiddleware, compose } from 'redux'
// import reducer from './reducers/index'
import ReduxThunk from 'redux-thunk'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const enhancer = compose(
  applyMiddleware(ReduxThunk),
  devTools
)

const store = createStore(enhancer)

// reducer, 

export default store