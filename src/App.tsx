// import { Route, Routes, Navigate } from 'react-router-dom';
import Router from 'components/Router';
import Loader from 'components/loader/Loader';
// import Layout from 'components/Layout';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from 'firebaseApp';
import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const auth = getAuth(app);
  const [init, setInit] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!auth?.currentUser
  );

  console.log(auth, isAuthenticated)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
      setInit(true);
    });
  }, [auth]);

  return (
    // <Layout>
    <>
    <Loader />
      {init ? <Router isAuthenticated={isAuthenticated} /> : <Loader />}
      <ToastContainer />
    </>
    // </Layout>
  );
}

export default App;
