import './App.css';
// Components imported

// Header
import Header from './components/header/Header';
// Nav
import Nav from './components/nav/Nav'
// About
import About from './components/about/About';

// Portfolio
import Portfolio from './components/portfolio/Portfolio';
// Contact
import Contact from './components/contact/Contact';
// Footer
import Footer from './components/footer/Footer';
// experience 
import Experience from './components/expericence/experience';
import Services from './components/services/Services';
import Testtimonials from './components/testimonials/testtimonials';

function App() {
  return (
   <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services /> 
      <Portfolio />
      <Testtimonials />
      <Contact />
      <Footer />
   </>
  );
}

export default App;
