import styles from "./CountryItem.module.css";
import FlagImage from "./FlagImage";

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span><FlagImage emoji={country.emoji} /></span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
