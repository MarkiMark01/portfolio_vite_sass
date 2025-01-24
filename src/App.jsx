import "./App.scss";
import About from "./components/pages/about/About";
import Contacts from "./components/pages/contacts/Contacts";
import Footer from "./components/pages/footer/Footer";
import Header from "./components/pages/header/Header";
import Main from "./components/pages/main/Main";
import Portfolio from "./components/pages/portfolio/Portfolio";
import Skills from "./components/pages/skills/Skills";

function App() {
  return (
    <main>
      <Header />
      <Main />
      <About />
      <Skills />
      <Portfolio/>
      <Contacts/>
      <Footer/>
    </main>
  );
}

export default App;
