import "./App.scss";
import About from "./components/pages/about/About";
import Header from "./components/pages/header/Header";
import Main from "./components/pages/main/Main";

function App() {
  return (
    <main>
      <Header />
      <Main/>
      <About/>
    </main>
  );
}

export default App;
