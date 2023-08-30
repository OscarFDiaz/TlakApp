import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRoute } from '../auth/routes/AuthRoute';
import { AUTH_STATUS } from '../helpers/authStatus';
import { useAuthStore } from '../zustand/useAuthStore';
import { HomeRouter } from '../pages/router/HomeRouter';

export const AppRouter = () => {
  const { status } = useAuthStore();

  return (
    <Routes>
      {status === AUTH_STATUS.auth ? (
        <Route path="/*" element={<HomeRouter />} />
      ) : (
        <Route path="auth/*" element={<AuthRoute />} />
      )}
      <Route path="/*" element={<Navigate to={'auth/login'} />} />
    </Routes>
  );
};
