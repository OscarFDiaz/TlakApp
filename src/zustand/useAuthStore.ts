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
  ) => Promise<void>;
  singInGoogle: () => Promise<void>;
  login: (email: Store['email'], password: string) => Promise<void>;
  logout: () => Promise<void>;
};

export const useAuthStore = create<Store & Action>()(
  devtools((set) => ({
    status: AUTH_STATUS.notAuth,
    uid: '',
    photoURL: '',
    email: '',
    displayName: '',
    errorMessage: '',
    singInGoogle: async () => {
      set({ status: AUTH_STATUS.checking });
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
          set({ errorMessage: userData.errorMessage, status: AUTH_STATUS.notAuth });
        }
      } catch (error) {
        console.log('Error: ', error);
      }
    },
    register: async (email, displayName, password) => {
      set({ status: AUTH_STATUS.checking });
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
            photoURL:
              userData.photoURL ||
              'https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png',
            email: userData.email,
            displayName: userData.displayName,
          });
        } else {
          set({ errorMessage: userData.errorMessage, status: AUTH_STATUS.notAuth });
        }
      } catch (error) {
        console.log('Error: ', error);
      }
    },
    login: async (email, password) => {
      set({ status: AUTH_STATUS.checking });
      try {
        const userData = await loginWithEmailPassword({ email, password });
        if (userData.ok) {
          set({
            status: AUTH_STATUS.auth,
            uid: userData.uid,
            email: userData.email,
            photoURL:
              userData.photoURL ||
              'https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png',
            displayName: userData.displayName || '',
          });
        } else {
          set({ errorMessage: userData.errorMessage, status: AUTH_STATUS.notAuth });
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
