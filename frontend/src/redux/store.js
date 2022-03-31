import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import { menuApi } from './menuApi'
import { getDefaultMiddleware } from "@reduxjs/toolkit";
import menuSlice from "./menuSlice";
export const store = configureStore({
	reducer: {
		user: userReducer,
		newMenu: menuSlice,
		[menuApi.reducerPath]: menuApi.reducer,

	},

	/*  
	 *	Helps in caching, mutations, invalidation
	 *	More info: https://redux-toolkit.js.org/rtk-query/overview
	*/
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(menuApi.middleware)
})