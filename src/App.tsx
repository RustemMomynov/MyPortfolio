import "./App.css";
import Header from "./layout/header/Header";
import About from "./layout/sections/about/About";
import Main from "./layout/sections/main/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <section>Works</section>
      <section>Contacts</section>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
