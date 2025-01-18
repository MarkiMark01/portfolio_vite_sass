import styles from "./main.module.scss";

const Main = () => {
  return (
    <section className={styles.main}>
      <section>
        <p className={styles.text}>
          Hi, I&apos;m <span>Markiyan Marych,</span> <br/>a Junior Frontend Developer with a passion for
          creating modern, user-friendly websites and applications.
        </p>
        <a href="" className={styles.btn}>CONTACT ME</a>
      </section>
      <section>
        <img src="./photo.jpg" alt="My photo" className={styles.photo} />
      </section>
    </section>
  );
};
export default Main;
