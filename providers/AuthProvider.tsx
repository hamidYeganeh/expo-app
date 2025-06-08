import {
  useForgetPasswordMutation,
  useLoginMutation,
  useLogoutMutation,
  useResetPasswordMutation,
  useSignInMutation,
} from "@/features/redux/services/auth.service";
import { IAuthContextState } from "@/types/auth.types";
import { createContext } from "react";

const initialState: IAuthContextState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const AuthContext = createContext({
  ...initialState,
  login: () => Promise.resolve(),
  initialize: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  signIn: () => Promise.resolve(),
  resetPassword: () => Promise.resolve(),
  forgetPassword: () => Promise.resolve(),
});

export const AuthProvider = () => {
  
  const [signIn, { isLoading: isSignInLoading }] = useSignInMutation();
  const [forgetPassword, { isLoading: isForgetPasswordLoading }] =
    useForgetPasswordMutation();
  const [resetPassword, { isLoading: isResetPasswordLoading }] =
    useResetPasswordMutation();
  const [logout, { isLoading: isLogoutLoading }] = useLogoutMutation();

  async function handleInitialize() {}
  async function handleLogin() {
    try {
      const body = {
        username: "",
        password: "",
      };
      // const response = await login(body).unwrap();
    } catch (error) {}
  }
  async function handleLogout() {}
  async function handleSignIn() {}
  async function handleResetPassword() {}
  async function handleForgetPassword() {}

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: false,
        isInitialized: false,
        user: null,
        login: handleLogin,
        initialize: handleInitialize,
        logout: handleLogout,
        signIn: handleSignIn,
        resetPassword: handleResetPassword,
        forgetPassword: handleForgetPassword,
      }}
    >
      <></>
    </AuthContext.Provider>
  );
};
