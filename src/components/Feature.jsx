import NickImage from '../images/nick.jpg';

export default function Feature() {
  return (
    <div className='relative py-16 sm:py-24'>
      <div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start'>
        <div className='relative sm:py-16 lg:py-0'>
          <div
            aria-hidden='true'
            className='hidden sm:hidden md:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen'
          >
            <div className='absolute inset-y-0 right-1/2 w-full rounded-r-3xl lg:right-72' />

            <svg
              className='absolute top-8 left-1/2 -ml-5 lg:-right-8 lg:left-auto lg:top-12'
              width={404}
              height={392}
              fill='none'
              viewBox='0 0 404 392'
            >
              <defs>
                <pattern
                  id='02f20b47-fd69-4224-a62a-4c9de5c763f7'
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits='userSpaceOnUse'
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className='text-orange-500'
                    fill='currentColor'
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={392}
                fill='url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)'
              />
            </svg>
          </div>
          <div className='relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20'>
            {/* Testimonial card*/}
            <div className='relative h-96 pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden'>
              <img
                className='absolute inset-0 h-full w-full object-cover'
                src={NickImage}
                alt=''
              />
              <div className='absolute inset-0 ' />
              <div className='absolute inset-0' />
              <div className='relative px-8'></div>
            </div>
          </div>
        </div>

        <div className='relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0'>
          {/* Content area */}
          <div className='py-12 sm:py-16 lg:py-20 text-left'>
            <h2 className='text-3xl font-extrabold tracking-tight sm:text-4xl capitalize'>
              A little about me
            </h2>
            <div className='my-6 space-y-6 font-medium'>
              <p className='text-base leading-7'>
                Nick Santangelo who goes by the stage name{' '}
                <span className='font-bold text-orange-500'>ARYSON!CK</span>, is
                an up and coming EDM DJ/Producer. He is currently attending the
                Recording Radio Film Connection School, and will be receiving
                his certificates in Ableton production and audio engineering.
                Born in Albuquerque, New Mexico{' '}
                <span className='font-bold text-orange-500'>ARYSON!CK</span> got
                into producing Hip-Hop music when he was sixteen as a hobby.
                Over the years that hobby turned into a passion and love for
                music.
              </p>
              <p className='text-base leading-7'>
                In the Summer of 2015{' '}
                <span className='font-bold text-orange-500'>ARYSON!CK</span>{' '}
                went to Las Vegas, NV for a trip, it was then, where he saw
                Calvin Harris and got inspired to start DJing.{' '}
                <span className='font-bold text-orange-500'>ARYSON!CK</span>{' '}
                started DJing graduation parties, events, and weddings on the
                side.
              </p>
              <p className='text-base leading-7'>
                <span className='font-bold text-orange-500'>ARYSON!CK</span>{' '}
                wanted to take his passion and love for music production and
                DJing to the next level. That's why he is currently attending
                Recording Radio Film Connection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
