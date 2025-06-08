// lib
import { baseQuery } from "@/utils/baseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";
// configs
import { REDUX_REDUCERS_PATH } from "@/configs/redux.config";
import { Endpoints } from "@/configs/endpoints";
// types
import type {
  IForgetPasswordPayload,
  ILoginPayload,
  ILogoutPayload,
  IResetPasswordPayload,
  IUser,
} from "@/types/auth.types";

const AuthService = createApi({
  reducerPath: REDUX_REDUCERS_PATH.auth,
  baseQuery: baseQuery(),
  endpoints: (builder) => ({
    login: builder.mutation<IUser, ILoginPayload>({
      query: (body) => ({
        url: Endpoints.auth.login,
        method: "POST",
        body,
      }),
    }),
    signIn: builder.mutation<IUser, ILoginPayload>({
      query: (body) => ({
        url: Endpoints.auth.signIn,
        method: "POST",
        body,
      }),
    }),
    logout: builder.mutation<IUser, ILogoutPayload>({
      query: (body) => ({
        url: Endpoints.auth.logout,
        method: "POST",
        body,
      }),
    }),
    resetPassword: builder.mutation<IUser, IResetPasswordPayload>({
      query: (body) => ({
        url: Endpoints.auth.resetPassword,
        method: "POST",
        body,
      }),
    }),
    forgetPassword: builder.mutation<IUser, IForgetPasswordPayload>({
      query: (body) => ({
        url: Endpoints.auth.forgetPassword,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useSignInMutation,
  useForgetPasswordMutation,
  useResetPasswordMutation,
  useLogoutMutation,
} = AuthService;
export default AuthService;
