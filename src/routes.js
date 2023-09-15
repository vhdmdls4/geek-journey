import PaginaPadrao from 'components/PaginaPadrao';
import Home from 'pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Categories from 'store/reducers/categories';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Home />} />
          <Route path="/categoria/:categoryName" element={<Categories />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
