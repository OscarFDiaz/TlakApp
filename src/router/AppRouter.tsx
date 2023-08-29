import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { AuthRoute } from '../auth/routes/AuthRoute';
import { AUTH_STATUS } from '../helpers/authStatus';
import { useAuthStore } from '../zustand/useAuthStore';

export const AppRouter = () => {
  const { status } = useAuthStore();

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
