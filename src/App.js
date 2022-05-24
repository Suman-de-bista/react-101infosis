import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Service from "./Components/Service";
import Customer from "./Components/Customer";
import Features from "./Components/Features";
import Testimonials from "./Components/Testimonials";
import Teams from "./Components/Teams";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <About/>
      <Service/>
      <Customer/>
      <Testimonials/>
      <Features/>
      <Teams/>
    </div>
  );
}

export default App;
