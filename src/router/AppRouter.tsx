import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from '../layouts/Home';
import { AuthRoute } from '../auth/routes/AuthRoute';
import { AUTH_STATUS } from '../helpers/authStatus';

export const AppRouter = () => {
  // const status = 'not-authenticated';
  const status = AUTH_STATUS.notAuth;

  return (
    <Routes>
      {status === AUTH_STATUS.auth ? (
        <Route path="/*" element={<Home />} />
      ) : (
        <Route path="auth/*" element={<AuthRoute />} />
      )}
      <Route path="/*" element={<Navigate to={'/auth/login'} />} />
    </Routes>
  );
};
