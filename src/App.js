import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/home-page/home-page";
import ProductsDetails from "./components/home-page/shop-products/products-details/products-details";
import AppLayout from "./components/layout/app-layout";
import ShopDepartments from "./components/home-page/shop-products/shop-departments/shop-departments";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="" element={<HomePage />} />
          <Route path="/details/:productId" element={<ProductsDetails />} />
          <Route path="/shop-departments/:departmentName" element={<ShopDepartments />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
