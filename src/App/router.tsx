import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Pages/Home';
import Login from './Pages/Auth';
import Books from './Pages/Books';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login/*" element={<Login />} />
        <Route path="/books" element={<Books />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
