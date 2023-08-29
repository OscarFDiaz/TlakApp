import { create } from 'zustand';
import {
  logOutFirebase,
  loginWithEmailPassword,
  registerUserWithEmailPassword,
  signInWithGoogle,
} from '../firebase/providers';
import { devtools } from 'zustand/middleware';
import { AUTH_STATUS } from '../helpers/authStatus';

type Store = {
  status: string;
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  errorMessage: string | unknown;
};

type Action = {
  register: (
    email: Store['email'],
    displayName: Store['displayName'],
    password: string,
    photoURL: Store['photoURL'],
    errorMessage: Store['errorMessage'],
  ) => Promise<void>;
  singInGoogle: () => Promise<void>;
  login: (email: Store['email'], password: string) => Promise<void>;
  logout: () => Promise<void>;
};

export const useAuthStore = create<Store & Action>()(
  devtools((set) => ({
    status: AUTH_STATUS.checking,
    uid: '',
    photoURL: '',
    email: '',
    displayName: '',
    errorMessage: '',
    singInGoogle: async () => {
      try {
        const userData = await signInWithGoogle();
        if (userData.ok) {
          set({
            status: AUTH_STATUS.auth,
            uid: userData.uid,
            photoURL: userData.photoURL || '',
            email: userData.email || '',
            displayName: userData.displayName || '',
          });
        } else {
          set({ errorMessage: userData.errorMessage });
        }
      } catch (error) {
        console.log('Error: ', error);
      }
    },
    register: async (email, password, displayName) => {
      try {
        const userData = await registerUserWithEmailPassword({
          email,
          password,
          displayName,
        });

        if (userData.ok) {
          set({
            status: AUTH_STATUS.auth,
            uid: userData.uid,
            photoURL: userData.photoURL || '',
            email: userData.email,
            displayName: userData.displayName,
          });
        } else {
          set({ errorMessage: userData.errorMessage });
        }
      } catch (error) {
        console.log('Error: ', error);
      }
    },
    login: async (email, password) => {
      try {
        const userData = await loginWithEmailPassword({ email, password });
        if (userData.ok) {
          set({
            status: AUTH_STATUS.auth,
            uid: userData.uid,
            photoURL: userData.photoURL || '',
            displayName: userData.displayName || '',
          });
        } else {
          set({ errorMessage: userData.errorMessage });
        }
      } catch (error) {
        console.log('Error: ', error);
      }
    },
    logout: async () => {
      try {
        await logOutFirebase();
        set({
          status: AUTH_STATUS.notAuth,
          uid: '',
          photoURL: '',
          email: '',
          displayName: '',
          errorMessage: '',
        });
      } catch (error) {
        console.log('Error: ', error);
      }
    },
  })),
);
