import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/auth-reducers';


export default configureStore({

    
    reducer : {
        identification : authReducer
    },
    devTools : true
    
    
})