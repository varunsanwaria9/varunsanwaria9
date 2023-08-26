import HomePage from "./components/HomePage";
import NavbarFn from "./components/Navbar";
import Work from "./components/Work";
import './App.css'

function App() {
  return (
    <div className="App">
      <NavbarFn />
      <HomePage />
      <Work />
    </div>
  );
}

export default App;
