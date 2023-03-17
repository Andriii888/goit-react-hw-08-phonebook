import React, { lazy,useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { refreshUser } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import {Appstyle} from './App.styled'





const HomeView = lazy(() => import('../pages/HomeView/HomeView'));
const RegisterView = lazy(() => import('../pages/RegisterView/RegisterView'));
const ContactsView = lazy(() => import('../pages/ContactsView/ContactsView'));
const LoginView = lazy(() => import('../pages/LoginView/LoginView'));

export function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Appstyle>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeView />} />
          <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterView />} />
          }
        />
          <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginView />} />
          }/>
          <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsView />} />
          }
        />
        </Route>
      </Routes>

     
    </Appstyle>
  );
}
