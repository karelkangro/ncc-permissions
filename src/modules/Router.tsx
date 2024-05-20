import { Suspense, lazy } from 'react';
import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';
import { LandingPageLayout } from 'components';

const PermissionsRouter = lazy(() => import('./Permissions/PermissionsRouter'));

export const Router = () => (
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<LandingPageLayout />}>
          <Route path="/settings/*" element={<Suspense><PermissionsRouter /></Suspense>} />
          <Route path="*" element={<Navigate to="/settings" replace />} />
        </Route>
      </Routes>
    </Suspense>
  </BrowserRouter>
);
