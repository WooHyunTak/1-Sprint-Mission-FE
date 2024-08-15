import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Faq from "./pages/Faq.jsx";
import Privacy from "./pages/Privacy.jsx";
import App from "./components/App.jsx";
import Items from "./pages/Items.jsx";
import Registration from "./pages/Registration.jsx";
import DetailProduct from "./pages/DetailProduct.jsx";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/items" element={<Items />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/detailproduct" element={<DetailProduct />} />
          {/* 추후 Route 페이지 추가 */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
