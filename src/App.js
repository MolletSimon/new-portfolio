import "./App.css";
import About from "./components/about";
import Experience from "./components/experience";
import Header from "./components/header";
import Landing from "./components/landing";
import Works from "./components/works";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <About />
      <Works />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
