import HeroImage from '../images/dj1.jpg';
import { ArrowRight, Equalizer, ZiaSun } from './Icons';
import siteConfig from '../siteConfig';

export default function Hero() {
  return (
    <section
      id='top'
      className='relative isolate flex min-h-[100svh] flex-col overflow-hidden'
    >
      <img
        src={HeroImage}
        alt=''
        className='absolute inset-0 -z-20 h-full w-full object-cover object-[70%_center]'
      />
      {/* Red/black wash over the photo */}
      <div className='from-ink via-ink/85 to-chile/40 absolute inset-0 -z-10 bg-gradient-to-r' />
      <div className='from-ink to-ink/60 absolute inset-0 -z-10 bg-gradient-to-t via-transparent' />

      <ZiaSun className='spin-slow text-zia/20 pointer-events-none absolute -right-40 top-1/2 -z-10 h-[38rem] w-[38rem] -translate-y-1/2 sm:-right-24 lg:h-[52rem] lg:w-[52rem]' />

      <div className='mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pt-28 pb-16 sm:px-8'>
        <p
          className='rise label text-zia flex items-center gap-3'
          style={{ animationDelay: '100ms' }}
        >
          <Equalizer className='text-zia' />
          EDM DJ / Producer — {siteConfig.hometown}
        </p>

        <h1 className='font-display mt-6 font-black uppercase leading-[0.82] tracking-tight'>
          <span
            className='rise block text-[clamp(4.5rem,19vw,16rem)]'
            style={{ animationDelay: '200ms' }}
          >
            Aryson<span className='text-zia'>!</span>ck
          </span>
          <span
            className='rise text-outline block text-[clamp(2.4rem,9vw,7.5rem)]'
            style={{ animationDelay: '350ms' }}
          >
            Turn it up.
          </span>
        </h1>

        <p
          className='rise text-bone/75 mt-8 max-w-md text-lg leading-relaxed'
          style={{ animationDelay: '500ms' }}
        >
          High-voltage sets built on a producer's ear — from hip-hop roots to
          festival-sized drops. Weddings, grad parties, club nights.
        </p>

        <div
          className='rise mt-10 flex flex-wrap gap-4'
          style={{ animationDelay: '650ms' }}
        >
          <a href='#book' className='btn-primary'>
            Book a set <ArrowRight className='h-4 w-4' />
          </a>
          <a href='#about' className='btn-ghost'>
            Meet Nick
          </a>
        </div>
      </div>

      <div className='border-bone/15 mx-auto hidden w-full max-w-7xl grid-cols-3 border-t px-5 sm:px-8 md:grid'>
        {[
          ['Est.', '2015'],
          ['Home base', 'Albuquerque, NM'],
          ['Sound', 'EDM · House · Hip-Hop'],
        ].map(([k, v]) => (
          <div key={k} className='py-6 pr-6'>
            <p className='label'>{k}</p>
            <p className='font-display mt-1 text-2xl font-extrabold uppercase'>
              {v}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
