import "./App.css";
import Footer from "./layout/footer/Footer";
import Header from "./layout/header/Header";
import About from "./layout/sections/about/About";
import Contacts from "./layout/sections/contacts/Contacts";
import Main from "./layout/sections/main/Main";
import Works from "./layout/sections/works/Works";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Works />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
