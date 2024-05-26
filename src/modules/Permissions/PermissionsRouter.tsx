import { Routes, Route, Navigate } from 'react-router-dom';
import { Permissions } from './Permissions';

const EmptyPage = () => <span></span>

const PermissionsRouter = () => (
  <Routes>
    <Route path="/" element={<Navigate to="permissions" replace />} />
    <Route path="permissions" element={<Permissions />} />
    <Route path="company" element={<EmptyPage />} />
    <Route path="user" element={<EmptyPage />} />
    <Route path="*" element={<EmptyPage />} />
  </Routes>
);

export default PermissionsRouter;