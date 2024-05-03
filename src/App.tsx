import { Scrollbar } from "smooth-scrollbar-react";

import Footer from "./layout/footer/Footer";
import Header from "./layout/header/Header";
import About from "./layout/sections/about/About";
import Contacts from "./layout/sections/contacts/Contacts";
import Main from "./layout/sections/main/Main";
import Works from "./layout/sections/works/Works";

function App() {
  return (
    <div className="App">
      <Scrollbar
        damping={0.1}
        thumbMinSize={20}
        renderByPixels={true}
        alwaysShowTracks={false}
        continuousScrolling={true}
        plugins={{
          overscroll: true,
        }}
      >
        <div>
          <Header />
          <Main />
          <About />
          <Works />
          <Contacts />
          <Footer />
        </div>
      </Scrollbar>
    </div>
  );
}

export default App;
