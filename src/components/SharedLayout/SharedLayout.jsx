import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header/Header';
import Spinner from '../Spinner/Spinner';

import s from './SharedLayout.module.css';
import Container from '../Container/Container';

// import { Navigation, UserMenu } from 'components';

// import Icon from '../Icon/Icon';

const SharedLayout = () => {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        {/* <div className={s.wraper}> */}

        <Header />

        {/* style={{ minHeight: '100%' }} */}
        {/* style={{ minHeight: '100vh' }} */}
        <main>
          {/* <Container> */}
          <Outlet />
          {/* </Container> */}
        </main>

        {/* </div> */}
      </Suspense>
      ;
    </>
  );
};

export default SharedLayout;
//  <Loader>
//    <Spinner color="#9ebbff" size="20px" />
//  </Loader>;

// import Spinner from '../../components/common/Spinner/Spinner';
// import Loader from '../common/Loader/Loader';

//  <Suspense fallback={<Spinner />}>
//    <div className={s.wraper}>
//      <Header />
//      <main style={{ minHeight: '100%' }}>
//        <Outlet />
//      </main>
//    </div>
//  </Suspense>;

//  <Header />

//     <Suspense fallback={null}>
//       <Outlet />
//     </Suspense>
