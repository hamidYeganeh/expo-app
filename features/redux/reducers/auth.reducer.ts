import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IAuthContextState, ILoginPayload } from "@/types/auth.types";

const initialState: IAuthContextState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

export const counterSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    initialize: (state) => {},
    login: (state, payload: PayloadAction<ILoginPayload>) => {},
  },
});

export const { login } = counterSlice.actions;

export default counterSlice.reducer;
