import PaginaPadrao from 'components/PaginaPadrao';
import Cart from 'pages/Cart';
import CategoryPage from 'pages/Category';
import Home from 'pages/Home';
import Partners from 'pages/Partners';
import { HashRouter, Route, Routes } from 'react-router-dom';

export default function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Home />} />
          <Route path="/categoria/:categoryName" element={<CategoryPage />} />
          <Route path="/parceiros-geek" element={<Partners />} />
          <Route path="/carrinho" element={<Cart />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
