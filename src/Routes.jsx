import React from 'react';

import { Routes, Route } from 'react-router-dom';

const NotFound = React.lazy(() => import('pages/NotFound'));

function AppRoutes() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
