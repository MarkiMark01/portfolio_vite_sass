import styles from "./contact.module.scss";
import Phone from "../../icons/Phone";
import Mail from "../../icons/Mail";
import Map from "../../icons/Map";

const Contacts = () => {
  return (
    <section id="contact">
      <h2 className={styles.h2}>Contact me</h2>
      <div className={styles.contactBox}>
      <div className={styles.infoBox}>
        <Mail />
        <a href="mailto:markiyan.marych@gmail.com" target="_blank">
          markiyan.marych@gmail.com
        </a>
      </div>
      <div className={styles.infoBox1}>
        <Phone />
        <a href="tel:48720493341" target="_blank">
          48 720 493 341
        </a>
      </div>
      <br/>
      <div className={styles.infoBox}>
        <Map />
        <a
          href="https://www.google.com/maps/place/%D0%9A%D0%B0%D1%82%D0%BE%D0%B2%D1%96%D1%86%D0%B5/@50.3030958,18.9290041,11z/data=!4m6!3m5!1s0x4716ce2336a1ccd1:0xb9af2a350559fabb!8m2!3d50.2648919!4d19.0237815!16zL20vMGJsZDg?authuser=0&entry=ttu&g_ep=EgoyMDI1MDEyMC4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
        >
          Katowice, Poland
        </a>
      </div>
      </div>
    </section>
  );
};
export default Contacts;
