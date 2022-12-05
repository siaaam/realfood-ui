import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './components/pages/HomePage';
import Layout from './components/shared/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
