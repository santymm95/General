// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
 import WhatsappButton from './components/WhatsappButton';
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

let phoneNumber = 3136895352

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <WhatsappButton phoneNumber={phoneNumber} />
    </div>
  );
}

export default App;
