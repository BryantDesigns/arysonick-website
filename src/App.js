import Feature from './components/Feature';
import Footer from './components/Footer';
import HeaderImage from './images/dj1.jpg';

function App() {
  return (
    <>
      <div className='bg-zinc-900'>
        <div
          className='flex h-96 items-center justify-center'
          style={{
            backgroundImage: `url(${HeaderImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <h1 className='-mt-20 text-6xl text-orange-500 drop-shadow-lg sm:text-7xl md:text-9xl '>
            ARYSON!CK
          </h1>
        </div>
        <div className='mx-4 -mt-20 flex-col justify-between rounded-xl bg-gradient-to-t from-zinc-800 to-zinc-700 text-gray-400 shadow-xl shadow-orange-500 sm:mx-8'>
          <Feature />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
