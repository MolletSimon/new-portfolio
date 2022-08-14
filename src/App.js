import "./App.css";
import About from "./components/about";
import Experience from "./components/experience";
import Header from "./components/header";
import Landing from "./components/landing";
import Works from "./components/works";

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <Works />
      <Experience />
      <About />
    </div>
  );
}

export default App;
