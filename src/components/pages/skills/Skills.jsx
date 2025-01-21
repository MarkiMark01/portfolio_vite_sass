import styles from "./skills.module.scss";
import { skillsData } from "./skillsData";

const Skills = () => {
  return (
    <section id="skills-box">
      <div>
        <h2>Skills</h2>
        <div className={styles["skills-container"]}>
          {skillsData.map((skill, index) => (
            <div key={index} className={styles.skill}>
              <skill.Icon className={styles.icon} aria-hidden="true" />
              <span aria-label={`Skill: ${skill.name}`} className={styles.text}>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;



