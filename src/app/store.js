import { configureStore } from "@reduxjs/toolkit";
import ui from "../features/ui/uiSlice";
import bookmarks from "../features/bookmarks/bookmarks.js"
export const store = configureStore({
	reducer: {
		ui, 
		bookmarks,
	}
})