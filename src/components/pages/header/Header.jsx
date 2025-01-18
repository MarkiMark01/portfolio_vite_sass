
import In from "../../icons/In";
import GitHub from "../../icons/GitHub";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
       <img src="./icon.png" alt="logo" width={50} height={50} style={{padding: 2}}/>
       <nav className={styles.navBar}>
         <a href="">About me</a>
         <a href="">Portfolio</a>
         <a href="">Contact me</a>
       </nav>
       <nav>
         <a href="https://www.linkedin.com/in/markiyan-marych/" target='_blanc'>
          <In/>
         </a>
         <a href="https://github.com/MarkiMark01" target='_blanc'>
           <GitHub/>
         </a>
       </nav>
    </header>
  );
};
export default Header;