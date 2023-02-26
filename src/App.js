import "./App.css";
import About from "./components/about";
import Experience from "./components/experience";
import Header from "./components/header";
import Landing from "./components/landing";
import Works from "./components/works";
import Footer from "./components/footer";
import ContactMe from "./components/contact";
import LanguageContext from "./language-context";
import { useState } from "react";

function App() {
  const [language, setLanguage] = useState("en");
  const value = { language, setLanguage };

  return (
    <div className="App">
      <LanguageContext.Provider value={value}>
        <Header />
        <Landing />
        <About />
        <Experience />
        <Works />
        <ContactMe />
        <Footer />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
