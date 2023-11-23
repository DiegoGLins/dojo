import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface UserType {
    id: string;
    email: string
    password: string
    repeatPassword: string
}

const initialState: UserType[] = []

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        createUser(state, action: PayloadAction<UserType>) {
            state.push(action.payload)
            return state
        }
    }
})

export const { createUser } = usersSlice.actions
export default usersSlice.reducer

