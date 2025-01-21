import "./App.scss";
import About from "./components/pages/about/About";
import Header from "./components/pages/header/Header";
import Main from "./components/pages/main/Main";
import Skills from "./components/pages/skills/Skills";

function App() {
  return (
    <main>
      <Header />
      <Main />
      <About />
      <Skills />
    </main>
  );
}

export default App;
