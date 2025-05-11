import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import CountryList from "./components/CountryList";
import CityList from "./components/CityList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="product" element={<Product />}></Route>
          <Route path="pricing" element={<Pricing />}></Route>
          <Route path="app" element={<AppLayout />}>
            <Route index element={<CityList/>}></Route>
            <Route path="cities" element={<CityList/>}></Route>
            <Route path="countries" element={<CountryList/>}></Route>
            <Route path="form" element={<p>form</p>}></Route>
          </Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
