import HomePage from "./components/HomePage";
import NavbarFn from "./components/Navbar";
import Work from "./components/Work";
import Skills from "./components/Skills";
import './App.css'

function App() {
  return (
    <div className="App">
      <NavbarFn />
      <HomePage />
      <Work />
      <Skills />
    </div>
  );
}

export default App;
