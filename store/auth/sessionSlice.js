import { createSlice } from '@reduxjs/toolkit'

export const sessionSlice = createSlice({
	name: 'auth/session',
	initialState: {
        token: '',
        signedIn: false,
        isUserEmailVerified:false
    },
	reducers: {
        onSignInSuccess: (state, action) => {
            state.signedIn = true
            state.token = action.payload
        },
        onSignOutSuccess: (state) => {
            state.signedIn = false
            state.token = ''
            state.isUserEmailVerified = false
        },
        setToken: (state, action) =>  {
            state.token = action.payload
        },
        setIsUserEmailVerified:(state, action)=>{
            state.isUserEmailVerified = action.payload
        }
	},
})

export const { onSignInSuccess, onSignOutSuccess, setToken, setIsUserEmailVerified } = sessionSlice.actions

export default sessionSlice.reducer