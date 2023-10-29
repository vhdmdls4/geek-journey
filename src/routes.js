import PaginaPadrao from 'components/PaginaPadrao';
import CategoryPage from 'pages/Category';
import Home from 'pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Home />} />
          <Route path="/categoria/:categoryName" element={<CategoryPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
