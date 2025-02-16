import styles from "./portfolio.module.scss";
import { projects } from "./projects";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2 className={styles.h2}>Portfolio</h2>
      <ul className={styles.portfolioList}>
        {projects.map(({ href, img, alt, title, description }) => (
          <li key={title} className={styles.portfolioItem}>
            <a href={href} target="_blank" rel="noopener noreferrer">
              <div className={styles.portfolioElem}>
                <div className={styles.portfolioInner}>
                  <div className={styles.portfolioFront}>
                    <img src={img} alt={alt} loading="lazy" />
                  </div>
                  <div className={styles.portfolioBack}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Portfolio;




  
