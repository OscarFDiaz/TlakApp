import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from '../layouts/Home';
import { AuthRoute } from '../auth/routes/AuthRoute';

export const AppRouter = () => {
  enum AUTH_STATUS {
    auth = 'authenticated',
    notAuth = 'not-authenticated',
  }
  // const status = 'not-authenticated';
  const status = AUTH_STATUS.notAuth;

  return (
    <Routes>
      {status === 'authenticated' ? (
        <Route path="/*" element={<Home />} />
      ) : (
        <Route path="auth/*" element={<AuthRoute />} />
      )}
      <Route path="/*" element={<Navigate to={'/auth/login'} />} />
    </Routes>

    // <Routes>
    //   {status === AUTH_STATUS.auth ? (
    //     <>
    //       <Route path="/auth/*" element={<Login />} />
    //       <Route path="/*" element={<Navigate to={'/auth/login'} />} />
    //     </>
    //   ) : (
    //     <>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/*" element={<Navigate to={'/'} />} />
    //     </>
    //   )}
    // </Routes>
  );
};
