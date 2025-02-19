import React, { memo } from "react";
import styles from "./portfolio.module.scss";
import { projects } from "./projects";

const PortfolioItem = memo(({ href, img, alt, title, description }) => {
  return (
    <li className={styles.portfolioItem}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <div className={styles.portfolioElem}>
          <div className={styles.portfolioInner}>
            <div className={styles.portfolioFront}>
              <img src={img} alt={alt} loading="lazy" width="300" height="200" />
            </div>
            <div className={styles.portfolioBack}>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </a>
    </li>
  );
});

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2 className={styles.h2}>Portfolio</h2>
      <ul className={styles.portfolioList}>
        {projects.map(({ href, img, alt, title, description }) => (
          <PortfolioItem
            key={title}
            href={href}
            img={img}
            alt={alt}
            title={title}
            description={description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Portfolio;





  
