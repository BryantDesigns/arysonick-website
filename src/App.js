import Feature from './components/Feature';
import Footer from './components/Footer';
import HeaderImage from './images/dj1.jpg';

function App() {
  return (
    <>
      <div className='bg-zinc-900'>
        <div
          className='h-96 flex justify-center items-center'
          style={{
            backgroundImage: `url(${HeaderImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <h1 className='text-6xl -mt-20 sm:text-7xl md:text-9xl text-orange-500 drop-shadow-lg '>
            ARYSON!CK
          </h1>
        </div>
        <div className='flex-col mx-4 sm:mx-8 -mt-20 justify-between bg-gradient-to-t from-zinc-800 to-zinc-700 rounded-xl shadow-xl shadow-orange-500 text-gray-400'>
          <Feature />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
