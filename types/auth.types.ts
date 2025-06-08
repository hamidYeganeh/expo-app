export interface IAuthContextState {
  isAuthenticated: boolean;
  isInitialized: boolean;
  user: IUser | null;
}

export interface IUser {
  name: string;
  avatar: string;
  username: string;
  email: string;
}
export interface ILoginPayload {
  username: string;
  password: string;
}
export interface ISignInPayload {
  name: string;
  password: string;
  username: string;
}
export interface IResetPasswordPayload {
  email: string;
}
export interface IForgetPasswordPayload {
  password: string;
}
export interface ILogoutPayload {}
