import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface LoginType {
    email: string;
    password: string
}

const initialState: LoginType = {
    email: '',
    password: ''
}

const userLoginSlice = createSlice({
    name: 'userlogin',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<LoginType>) => {
            state = action.payload
            return state
        }
    }
})

export const { login } = userLoginSlice.actions
export default userLoginSlice.reducer

