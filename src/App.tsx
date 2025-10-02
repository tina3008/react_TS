import { Header, Loader, useAppDispatch } from 'components/index';
import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { useEffect } from 'react';

import { fetchBaseCurrency } from 'reduxState/operations';
import { useDispatch } from 'react-redux';
import { setBaseCurrency } from 'reduxState/currencySlice';

const HomePage = lazy(() => import('./pages/Home'));
const Rates = lazy(() => import('./pages/Rates.js'));

interface GeolocationCoordinates {
  latitude: number;
  longitude: number;
  altitude: number | null;
  accuracy: number;
  altitudeAccuracy: number | null;
  heading: number | null;
  speed: number | null;
}

export const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const options: PositionOptions = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };    

    function success(pos: GeolocationPosition) {
      dispatch(fetchBaseCurrency(pos.coords));
    }

    function error() {
      dispatch(setBaseCurrency('USD'));
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }, [dispatch]);

  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rates" element={<Rates />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
};
