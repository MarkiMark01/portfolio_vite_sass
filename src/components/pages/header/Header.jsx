import In from "../../icons/In";
import GitHub from "../../icons/GitHub";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="#top">
        <img
          src="./icon.png"
          alt="logo"
          width={50}
          height={50}
          style={{ padding: 2, marginLeft: 10, marginRight: 10 }}
        />
      </a>
      <nav className={styles.navBar}>
        <a href="#myabout">About</a>
        <a href="#myskills">Skills</a>
        <a href="#myportfolio">Portfolio</a>
        <a href="#mycontacts">Contacts</a>
      </nav>
      <nav className={styles.navIcons}>
        <a href="https://www.linkedin.com/in/markiyan-marych/" target="_blanc">
          <In />
        </a>
        <a href="https://github.com/MarkiMark01" target="_blanc">
          <GitHub />
        </a>
      </nav>
    </header>
  );
};
export default Header;
