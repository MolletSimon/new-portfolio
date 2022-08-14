import "./App.css";
import Experience from "./components/experience";
import Header from "./components/header";
import Home from "./components/home";
import Landing from "./components/landing";

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <Home />
      <Experience />
    </div>
  );
}

export default App;
