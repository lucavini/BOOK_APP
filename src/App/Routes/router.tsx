import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../Pages/Home';
import Login from '../Pages/Auth';
import Books from '../Pages/Books';
import { Wrapper } from './styles';

function Router() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />

          <Route path="/login/*" element={<Login />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
}

export default Router;
