import Css from "../../icons/Css";
import Git from "../../icons/Git";
import HtIcon from "../../icons/HtIcon";
import Js from "../../icons/Js";
import Next from "../../icons/Next";
import Node from "../../icons/Node";
import React from "../../icons/React";
import Redux from "../../icons/Redux";
import styles from "./skills.module.scss";

const Skills = () => {
  return (
    <section id="skills-box">
      <div className={styles.center}>
        <h2>Skills</h2>
        <div className={styles.skills}>
          <div className={styles.skill}>
            <Js />
            <span>Java Script</span>
          </div>

          <div className={styles.skill}>
            <React />
            <span>React</span>
          </div>

          <div className={styles.skill}>
            <Next />
            <span>Next.js</span>
          </div>
          <div className={styles.skill}>
            <Redux />
            <span>Redux</span>
          </div>
          <div className={styles.skill}>
            <Node />
            <span>Node.js</span>
          </div>

          <div className={styles.skill}>
            <React />
            <span>React Native</span>
          </div>

          <div className={styles.skill}>
            <HtIcon />
            <span>HTML5</span>
          </div>

          <div className={styles.skill}>
            <Css />
            <span>CSS</span>
          </div>
          <div className={styles.skill}>
            <Git />
            <span>Git</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
