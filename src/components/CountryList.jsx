import { useCities } from "../Contexts/CitiesContext";
import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";

export default function CountryList() {
  const { cities } = useCities();
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);
  return (
    <div className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </div>
  );
}
