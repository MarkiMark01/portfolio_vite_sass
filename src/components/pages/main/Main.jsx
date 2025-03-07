import { useEffect, useState } from "react";

import styles from "./main.module.scss";

const Main = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`${isVisible ? styles.visible : ""} ${styles.main}`}>
      <section className={styles.descr}>
        <p className={styles.text}>
          Hi, I&apos;m <span>Markiyan Marych,</span> <br />a Junior Frontend
          (Fullstack) Developer with a passion for creating modern,
          user-friendly websites and applications.
        </p>
        <a href="mailto:markiyan.marych@gmail.com" className={styles.btn}>
          CONTACT ME
        </a>
      </section>
      <section className={styles.ph}>
        <img src="./photo.jpg" alt="My photo" className={styles.photo} />
      </section>
    </section>
  );
};

export default Main;
