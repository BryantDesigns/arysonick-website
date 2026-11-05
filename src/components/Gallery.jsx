import Crowd from '../images/dj.jpg';
import Rig from '../images/djpick.jpg';
import Booth from '../images/dj1.jpg';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const shots = [
  {
    src: Crowd,
    caption: 'Under the lights',
    className: 'md:col-span-7 md:row-span-2',
  },
  { src: Rig, caption: 'The rig', className: 'md:col-span-5' },
  { src: Booth, caption: 'Hands on the mixer', className: 'md:col-span-5' },
];

export default function Gallery() {
  return (
    <section id='gallery' className='bg-soot py-28 sm:py-36'>
      <div className='mx-auto max-w-7xl px-5 sm:px-8'>
        <SectionHeading index='04' kicker='Gallery'>
          In the booth.
        </SectionHeading>

        <div className='mt-16 grid gap-4 md:auto-rows-[18rem] md:grid-cols-12'>
          {shots.map((s, i) => (
            <Reveal
              as='figure'
              key={s.caption}
              delay={i * 120}
              className={`group relative aspect-[4/3] overflow-hidden bg-char md:aspect-auto ${s.className}`}
            >
              <img
                src={s.src}
                alt={s.caption}
                loading='lazy'
                className='h-full w-full object-cover transition duration-700 group-hover:scale-105'
              />
              <div className='absolute inset-0 bg-linear-to-t from-ink/80 via-transparent to-transparent' />
              <figcaption className='absolute bottom-4 left-4 label text-bone'>
                <span className='text-zia'>
                  Fig. {String(i + 1).padStart(2, '0')}
                </span>{' '}
                — {s.caption}
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
