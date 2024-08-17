import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  const getLinkClass = ({ isActive }: { isActive: boolean }) => isActive ? styles.active : styles.link;

  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          <li>
            <NavLink className={getLinkClass} to='/'>
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink className={getLinkClass} to='/albums'>
              Альбомы
            </NavLink>
          </li>
          <li>
            <NavLink className={getLinkClass} to='/about'>
              Про проект
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
