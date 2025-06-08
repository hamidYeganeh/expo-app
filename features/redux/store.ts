import { configureStore } from "@reduxjs/toolkit";
import { AuthReducer, PagesLayoutReducer } from "@/features/redux/reducers";
import { AuthService } from "./services";

export const Store = configureStore({
  reducer: {
    auth: AuthReducer,
    pagesLayout: PagesLayoutReducer,
    [AuthService.reducerPath]: AuthService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(AuthService.middleware),
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
