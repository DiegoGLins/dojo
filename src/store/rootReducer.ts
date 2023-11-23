import { combineReducers } from '@reduxjs/toolkit';
import usersSlice from './modules/usersSlice/usersSlice';
import userLoginSlice from './modules/userLoginSlice/userLoginSlice';

export default combineReducers({
    users: usersSlice,
    userlogin: userLoginSlice
});
