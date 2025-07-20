import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link to="/" className={styles.logo}>
      <img src="/icon.png" alt="My Travel logo" className={styles.logo} /> My
      Travels
    </Link>
  );
}

export default Logo;
