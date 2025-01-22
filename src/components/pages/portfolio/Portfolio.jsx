import styles from "./portfolio.module.scss";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className={styles.portfolioBox}>
        <a href="https://apple-store-nextjs-mongodb-tailwind.vercel.app/">
          <img src="./apple.jpg" alt="Icon" />
        </a>
        <a href="https://books-vite-redux-auth.vercel.app/">
          <img src="./book.jpg" alt="Icon" />
        </a>
        <a href="https://github.com/MarkiMark01/node.js-mongodb">
          <img src="./ecommerce.jpg" alt="Icon" />
        </a>
        <a href="https://expo.dev/preview/update?message=updated%20the%20project&updateRuntimeVersion=1.0.0&createdAt=2024-11-20T14%3A32%3A31.217Z&slug=exp&projectId=7503b3e2-e8c3-4888-bfac-9fcbefbc21f1&group=03215261-56ad-4f06-8f48-91ea34611ba2">
          <img src="./books.jpg" alt="Icon" />
        </a>
      </div>
    </section>
  );
};
export default Portfolio;
