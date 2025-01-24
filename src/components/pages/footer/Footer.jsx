import styles from "./footer.module.scss";
import In from "../../icons/In";
import GitHub from "../../icons/GitHub";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.social}>
        <div className={styles.line}>
          <div className={styles.links}>
            <a
              href="https://www.linkedin.com/in/markiyan-marych/"
              target="_blank"
            >
              <In />
            </a>
            <a href="https://github.com/MarkiMark01" target="_blank">
              <GitHub />
            </a>
          </div>
        </div>
      </div>
      <h2>Thanks for scrolling</h2>
    </footer>
  );
};
export default Footer;
