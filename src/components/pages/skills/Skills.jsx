import { useEffect, useRef } from "react";
import styles from "./skills.module.scss";
import { skillsData } from "./skillsData";

const Skills = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.2 }
    );

    const skills = containerRef.current.querySelectorAll(`.${styles.skill}`);
    skills.forEach((skill) => observer.observe(skill));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills-box">
      <div>
        <h2>Skills</h2>
        <div className={styles["skills-container"]} ref={containerRef}>
          {skillsData.map((skill, index) => (
            <div key={index} className={styles.skill}>
              <skill.Icon className={styles.icon} aria-hidden="true" />
              <span aria-label={`Skill: ${skill.name}`} className={styles.text}>
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;





