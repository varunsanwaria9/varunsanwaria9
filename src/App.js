import HomePage from "./components/HomePage";
import NavbarFn from "./components/Navbar";
import Work from "./components/Work";
import './App.css'
import Skill from "./components/Skill";

function App() {
  return (
    <div className="App">
      <NavbarFn />
      <HomePage />
      <Work />
      <Skill />
    </div>
  );
}

export default App;
