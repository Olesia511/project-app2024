// import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { Suspense, lazy } from 'react';

const HomePage = lazy(() => import('../pages/HomePage'));

export const App = () => {
  return (
    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101',
    //   }}
    // >
    //   PROJECT 2024 start
    // </div>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </Suspense>
  );
};
