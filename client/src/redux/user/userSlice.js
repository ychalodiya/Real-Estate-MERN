import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	currentUser: null,
	error: null,
	isLoading: false,
};
const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		signInStart: (state) => {
			state.isLoading = true;
		},
		signInSuccess: (state, action) => {
			state.isLoading = false;
			state.currentUser = action.payload;
			state.error = null;
		},
		signInFailure: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
		signOut: (state) => {
			state.currentUser = null;
			state.error = null;
			state.isLoading = false;
		},
	},
});

export const { signInStart, signInSuccess, signInFailure, signOut } =
	userSlice.actions;

export default userSlice.reducer;