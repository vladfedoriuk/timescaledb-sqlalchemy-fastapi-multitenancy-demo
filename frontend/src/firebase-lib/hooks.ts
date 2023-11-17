import { createContext, useContext } from "react";
import { User } from "firebase/auth";

export interface IAuthContext {
  currentUser: User | null;
  signOutCurrentUser: () => void;
  signInCurrentUserWithEmailAndPassword: (
    email: string,
    password: string,
  ) => void;
}

export const AuthContext = createContext<IAuthContext>({
  currentUser: null,
  signOutCurrentUser: () => {},
  signInCurrentUserWithEmailAndPassword: () => {},
});

export const useCurrentUser = () => {
  return useContext(AuthContext);
};
