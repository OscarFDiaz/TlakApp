import { Navigate, Route, Routes } from 'react-router-dom';
import { Login } from '../layouts/Login';
import { Home } from '../layouts/Home';

export const AppRouter = () => {
  enum AUTH_STATUS {
    auth = 'authenticated',
    notAuth = 'not-authenticated',
  }
  // const status = 'not-authenticated';
  const status = AUTH_STATUS.auth;

  return (
    <Routes>
      {status === AUTH_STATUS.notAuth ? (
        <>
          <Route path="/auth/*" element={<Login />} />
          <Route path="/*" element={<Navigate to={'/auth/login'} />} />
        </>
      ) : (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Navigate to={'/'} />} />
        </>
      )}
    </Routes>
  );
};
