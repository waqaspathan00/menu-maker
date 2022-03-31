import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import { menuApi } from './menuApi'
import { getDefaultMiddleware } from "@reduxjs/toolkit";
export const store = configureStore({
	reducer: {
		user: userReducer,
		[menuApi.reducerPath]: menuApi.reducer
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(menuApi.middleware)
})