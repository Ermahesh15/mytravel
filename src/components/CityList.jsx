import Spinner from "./Spinner";
import styles from "./CityList.module.css";
import CityItem from "./CityItem";
import Message from "./Message";
import { useCities } from "../Contexts/CitiesContext";

export default function CityList() {
  const { cities, isLoading } = useCities()
  if (isLoading) return <Spinner />;
  if (!cities.length) return <Message message={'Add your first city by clicking on the map.'} />;

  return (
    <div className={styles.cityList}>
      {cities.map((city) => (
        <CityItem key={city.date} city={city} />
      ))}
    </div>
  );
}
