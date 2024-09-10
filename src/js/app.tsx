import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/layout/layout';
import Main from './pages/main';
import Form from './components/form/form';
import { appRoute } from './const';

function App() {
  return (
    <Routes>
      <Route path={appRoute.MAIN} element={<Layout />}>
        <Route index element={<Main />} />
        <Route path={appRoute.REGISTER} element={<Form />} />
      </Route>
    </Routes>
  );
}

export default App;
