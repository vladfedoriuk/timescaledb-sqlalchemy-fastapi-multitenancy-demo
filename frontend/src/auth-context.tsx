import {
  User,
  getAuth,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { PropsWithChildren, useEffect, useState } from "react";
import { AuthContext } from "./firebase-lib/hooks";
import { app } from "./firebase-lib/app";

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const auth = getAuth(app);

  const signOutCurrentUser = async () => {
    await signOut(auth);
  };

  const signInCurrentUserWithEmailAndPassword = async (
    email: string,
    password: string,
  ) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, [auth, setCurrentUser]);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        signInCurrentUserWithEmailAndPassword,
        signOutCurrentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
