import { combineReducers } from 'redux';
import authReducer from './authReducer'; // Đảm bảo tên tệp và đường dẫn đúng
import userReducer from './userReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    users: userReducer
    // các reducer khác nếu có
});

export default rootReducer;
