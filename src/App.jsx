import Nav from './components/Nav';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Story from './components/Story';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Booking from './components/Booking';
import Footer from './components/Footer';

function App() {
  return (
    <div className='grain relative overflow-x-hidden'>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Story />
        <Services />
        <Gallery />
        <Booking />
      </main>
      <Marquee reverse />
      <Footer />
    </div>
  );
}

export default App;
