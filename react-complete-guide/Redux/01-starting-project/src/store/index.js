import { configureStore} from '@reduxjs/toolkit';
import counterReducer from './counter';
import authReducer from './auth';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer
    }
});

// store.subscribe(() => {
//     console.log(store.getItem());
// })
// store.dispatch()
// store.dispatch('increment')



export default store;