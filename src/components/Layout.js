import { Outlet } from 'react-router-dom';
// import { AppBarHeader } from './AppBar/AppBar';
import { Suspense } from 'react';
import { GlobalStyles } from './GlobalStyles';

export const Layout = () => {
  return (
    <>
      {/* <AppBarHeader /> */}
      <h2> HELLO </h2>
      <main
        style={{
          background:
            'linear-gradient(85deg, #040404 0%, rgba(4, 4, 4, 0) 100%), url(' +
            process.env.PUBLIC_URL +
            '/img/bg-img-desktop-1x.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundColor: '#040404',
          marginLeft: 'auto',
          width: '670px',
          height: '1005px',
        }}
      >
        <Suspense fallback={<div>LOADING.......</div>}>
          <Outlet />
        </Suspense>
      </main>
      <GlobalStyles />
    </>
  );
};
