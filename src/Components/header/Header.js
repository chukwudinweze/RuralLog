import Logo from "./Logo";
import Navbar from "./navbar/Navbar";
import styles from "./header.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { toggleMobileNav } from "../../store";

const Header = () => {
  const dispatch = useDispatch();

  const togglMobileMenu = () => {
    dispatch(toggleMobileNav());
  };
  return (
    <header className={styles.header}>
      <Logo />
      <Navbar />
      <button onClick={togglMobileMenu} className={styles.GiHamburgerMenu}>
        <GiHamburgerMenu />
      </button>
    </header>
  );
};

export default Header;
