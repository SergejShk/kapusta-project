import { useEffect } from 'react';
import { lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes, useSearchParams } from 'react-router-dom';
import { setAuthInfo } from 'redux/auth/authSlice';
import { getCurrentUserThunk } from 'redux/userData/userDataOperations';
import Header from './Header';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';


const HomePage = lazy(() => import('pages/HomePage'));
const BalancePage = lazy(() => import('pages/BalancePage'));
const ReportPage = lazy(() => import('pages/ReportPage'));

const App = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const accessToken  = searchParams.get("accessToken");
    const refreshToken  = searchParams.get("refreshToken");
    const sid  = searchParams.get("sid");
    if(!!(accessToken && refreshToken && sid)) {
      dispatch(setAuthInfo({accessToken, refreshToken, sid}));
      dispatch(getCurrentUserThunk());
    }
  }, [searchParams, dispatch])

  return (
    <> 
      <Header />

      <Routes>
        <Route
          path="/home"
          element={<PublicRoute component={HomePage} restricted />}
        />
        <Route
          path="/balance/"
          element={<PrivateRoute component={BalancePage} />}
        >
          <Route path="expenses" element={<></>} />
          <Route path="incomes" element={<></>} />
        </Route>
        <Route
          path="/report"
          element={<PrivateRoute component={ReportPage} />}
        />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
};

export default App;
