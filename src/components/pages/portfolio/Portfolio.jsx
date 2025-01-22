import styles from "./portfolio.module.scss";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className={styles.portfolioBox}>
        <a
          href="https://apple-store-nextjs-mongodb-tailwind.vercel.app/"
          target="_blanc"
        >
          <div className={styles.portfolioElem}>
            <img src="./apple.jpg" alt="Icon" className={styles.portfolioImg} />
            <span className={styles.portfolioText}>Online AppleStore</span>
          </div>
        </a>
        <a href="https://books-vite-redux-auth.vercel.app/" target="_blanc">
          <div className={styles.portfolioElem}>
            <img src="./book.jpg" alt="Icon" className={styles.portfolioImg} />
            <span className={styles.portfolioText}>Online BookStore</span>
          </div>
        </a>
        <a
          href="https://github.com/MarkiMark01/node.js-mongodb"
          target="_blanc"
        >
          <div className={styles.portfolioElem}>
            <img
              src="./ecommerce.jpg"
              alt="Icon"
              className={styles.portfolioImg}
            />
            <span className={styles.portfolioText}>
              E-commerce Platform Backend
            </span>
          </div>
        </a>
        <a
          href="https://expo.dev/preview/update?message=updated%20the%20project&updateRuntimeVersion=1.0.0&createdAt=2024-11-20T14%3A32%3A31.217Z&slug=exp&projectId=7503b3e2-e8c3-4888-bfac-9fcbefbc21f1&group=03215261-56ad-4f06-8f48-91ea34611ba2"
          target="_blanc"
        >
          <div className={styles.portfolioElem}>
            <img src="./books.jpg" alt="Icon" className={styles.portfolioImg} />
            <span className={styles.portfolioText}>
              Online Bookstore Mobile App
            </span>
          </div>
        </a>
      </div>
    </section>
  );
};
export default Portfolio;
