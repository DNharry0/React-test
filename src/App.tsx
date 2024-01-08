// import { Route, Routes, Navigate } from 'react-router-dom';
import Router from 'components/Router';
// import Layout from 'components/Layout';
import { getAuth } from 'firebase/auth';
import { app } from 'firebaseApp';
import { useState } from 'react';

function App() {
  const auth = getAuth(app)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!auth?.currentUser
  );

  console.log(auth, isAuthenticated)

  return (
    // <Layout>
      <Router/>
    // </Layout>
  );
}

export default App;
