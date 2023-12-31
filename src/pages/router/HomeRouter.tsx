import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from '../Home';

export const HomeRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<Navigate to={'/'} />} />
    </Routes>
  );
};
