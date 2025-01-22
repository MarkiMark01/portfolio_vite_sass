import styles from "./portfolio.module.scss";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className={styles.portfolioBox}>
        {/* Apple Store */}
        <a href="https://apple-store-nextjs-mongodb-tailwind.vercel.app/" target="_blank">
          <div className={styles.portfolioElem}>
            <div className={styles.portfolioInner}>
              <div className={styles.portfolioFront}>
                <img src="./apple.jpg" alt="Apple Store" />
              </div>
              <div className={styles.portfolioBack}>
                <h3>Online AppleStore</h3>
                <p>A modern e-commerce platform using Next.js, MongoDB, and Tailwind.</p>
              </div>
            </div>
          </div>
        </a>
        
        {/* Bookstore */}
        <a href="https://books-vite-redux-auth.vercel.app/" target="_blank">
          <div className={styles.portfolioElem}>
            <div className={styles.portfolioInner}>
              <div className={styles.portfolioFront}>
                <img src="./book.jpg" alt="Bookstore" />
              </div>
              <div className={styles.portfolioBack}>
                <h3>Online BookStore</h3>
                <p>A React and Vite-powered bookstore with Redux for state management.</p>
              </div>
            </div>
          </div>
        </a>

        {/* E-commerce Backend */}
        <a href="https://github.com/MarkiMark01/node.js-mongodb" target="_blank">
          <div className={styles.portfolioElem}>
            <div className={styles.portfolioInner}>
              <div className={styles.portfolioFront}>
                <img src="./ecommerce.jpg" alt="E-commerce Backend" />
              </div>
              <div className={styles.portfolioBack}>
                <h3>E-commerce Backend</h3>
                <p>A Node.js and MongoDB-based backend system for e-commerce platforms.</p>
              </div>
            </div>
          </div>
        </a>

        {/* Bookstore Mobile App */}
        <a
          href="https://expo.dev/preview/update?message=updated%20the%20project&updateRuntimeVersion=1.0.0&createdAt=2024-11-20T14%3A32%3A31.217Z&slug=exp&projectId=7503b3e2-e8c3-4888-bfac-9fcbefbc21f1&group=03215261-56ad-4f06-8f48-91ea34611ba2"
          target="_blank"
        >
          <div className={styles.portfolioElem}>
            <div className={styles.portfolioInner}>
              <div className={styles.portfolioFront}>
                <img src="./books.jpg" alt="Bookstore Mobile App" />
              </div>
              <div className={styles.portfolioBack}>
                <h3>Online Bookstore Mobile App</h3>
                <p>A React Native mobile app for exploring and buying books.</p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Portfolio;

  
