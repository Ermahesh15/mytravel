import { createContext, useContext, useEffect, useState } from "react";
const BaseURL = "http://localhost:9000/cities";

const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState([]);

  useEffect(function () {
    async function getData() {
      try {
        setIsLoading(true);
        const data = await fetch(BaseURL);
        const res = await data.json(); // ✅ fixed here
        setCities(res); // ✅ set data properly
      } catch {
        alert("There was an error loading data...");
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, []);


    async function getCity(id) {
      try {
        setIsLoading(true);
        const data = await fetch(`${BaseURL}/${id}`);
        const res = await data.json(); // ✅ fixed here
        setCurrentCity(res); // ✅ set data properly
      } catch {
        alert("There was an error loading data...");
      } finally {
        setIsLoading(false);
      }
    }

  return (
    <CitiesContext.Provider value={{ cities, isLoading, currentCity, getCity }}>
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("CitiesContext was used outside the CitiesProvider");
  return context;
}

export { CitiesProvider, useCities };
