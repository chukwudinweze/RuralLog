import MobileNavList from "./MobileNavList";
import { CloseOutlined, ExpandMore } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { toggleMobileNav } from "../../../store";
import styles from "./MobileNav.module.css";

const MobileNav = () => {
  const active = useSelector((state) => state.mobileNavActive.isActive);

  const dispatch = useDispatch();

  const closeMenu = () => {
    dispatch(toggleMobileNav());
  };
  return (
    <aside
      className={active ? styles.MobileNavActive : styles.MobileNavInactive}
    >
      <button className={styles.CloseMenu} onClick={closeMenu}>
        <CloseOutlined />
      </button>
      <MobileNavList label="About" />
      <MobileNavList label="Services" icon={<ExpandMore />} />
      <MobileNavList label="Products" icon={<ExpandMore />} />
      <MobileNavList label="Farmers" icon={<ExpandMore />} />
      <MobileNavList label="Contact" />
    </aside>
  );
};

export default MobileNav;
