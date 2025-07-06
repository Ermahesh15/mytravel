import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import CountryList from "./components/CountryList";
import CityList from "./components/CityList";
import City from "./components/City";
import Form from "./components/Form";
import {CitiesProvider} from "./Contexts/CitiesContext"

function App() { 

  return (
    <CitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="product" element={<Product />}></Route>
          <Route path="pricing" element={<Pricing />}></Route>
          <Route path="app" element={<AppLayout />}>
            <Route
              index
              element={ <Navigate replace to="cities"/>}
            ></Route>
            <Route
              path="cities"
              element={<CityList />}
            ></Route>
            <Route
              path="countries"
              element={<CountryList />}
            ></Route>
            <Route path="form" element={<Form/>}/>
            <Route path="cities/:id" element={<City />}></Route>
          </Route>

          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </CitiesProvider>
  );
}

export default App;
