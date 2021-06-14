import { createStore, combineReducers } from 'redux';
import fReducer from '../features/friend.list/reducer'
//создание локального хранилища
const rootReducer = combineReducers({
    cart: fReducer
})

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store