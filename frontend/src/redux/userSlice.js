import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	data: {}
}

export const userSlice = createSlice({
	name:'user',
	initialState,
	reducers: {
		getUserInfo: (state, action) => {
			state.data = [...action.payload];
		}
	}
})

export const {getUserInfo} = userSlice.actions;
export default userSlice.reducer