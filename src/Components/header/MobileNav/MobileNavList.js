import styles from "./MobileNavList.module.css";

const MobileNavList = ({ label, icon }) => {
  // const[expand, setExpand] = useState(false)
  return (
    <li className={styles.MobileNavList}>
      <p>{label && label}</p>
      <p>{icon && icon}</p>
    </li>
  );
};

export default MobileNavList;
