import Feature from './components/Feature'
import Footer from './components/Footer';
import Form from './components/Form';
import bg from './images/dj1.jpg'

function App() {
  
  return (
    <>
      <div style={{ background: `url(${bg}) center center cover`}}>
        <Feature />
      </div>
      
      <Form />
      <Footer />
    </>
  );
}

export default App;
