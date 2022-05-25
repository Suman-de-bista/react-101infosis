import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Service from "./Components/Service";
import Customer from "./Components/Customer";
import Features from "./Components/Features";
import Testimonials from "./Components/Testimonials";
import Teams from "./Components/Teams";
import Toolsandtech from "./Components/Toolsandtech";
import ConnectWithUs from "./Components/Connectwithus";
import Footer from "./Components/Footer";
import Recentproject from "./Components/Recentproject";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
    Aos.init({duration: 2000});
  },[])

  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <About/>
      <Service/>
      <Recentproject/>
      <Customer/>
      <Testimonials/>
      <Features/>
      <Teams/>
      <Toolsandtech/>
      <ConnectWithUs/>
      <Footer/>
    </div>
  );
}

export default App;
