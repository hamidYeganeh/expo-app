import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface IPagesLayoutState {
  isCollapsed: boolean;
}

const initialState: IPagesLayoutState = {
  isCollapsed: true,
};

export const pagesLayoutSlice = createSlice({
  name: "pagesLayout",
  initialState,
  reducers: {
    toggleNavbarCollapse: (state) => {
      state.isCollapsed = !state.isCollapsed;
    },
  },
});

export const { toggleNavbarCollapse } = pagesLayoutSlice.actions;

export const selectIsNavbarCollapsed = (state: RootState) =>
  state.pagesLayout.isCollapsed;

export default pagesLayoutSlice.reducer;
