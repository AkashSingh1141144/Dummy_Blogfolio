import { createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
  name: "bookmarks",
  initialState: { items: [] },
  reducers: {
    toggleBookmark(state, { payload }) {
      const exists = state.items.includes(payload)
      state.items = exists
        ? state.items.filter(id => id !== payload)
        : [...state.items, payload]
    }
  }
})

export const { toggleBookmark } = slice.actions
export default slice.reducer
