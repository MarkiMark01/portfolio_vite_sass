import styles from "./about.module.scss";

const About = () => {
  return (
    <section id="about">
      <h2>About</h2>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, quo
        ex corrupti ullam dolorum animi tempora eius soluta. Corporis culpa
        earum neque magnam facilis repellat asperiores debitis officiis minima
        nobis.
      </p>
    </section>
  );
};
export default About;
