import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const chapters = [
  {
    mark: '16',
    title: 'First beats',
    body: 'Starts producing hip-hop as a hobby. The hobby sticks.',
  },
  {
    mark: '2015',
    title: 'Las Vegas',
    body: 'Sees Calvin Harris live on a summer trip to Vegas — and decides to start DJing.',
  },
  {
    mark: 'Live',
    title: 'On the circuit',
    body: 'Plays graduation parties, events and weddings, learning to read every kind of crowd.',
  },
  {
    mark: 'Now',
    title: 'Next level',
    body: 'Training at Recording Radio Film Connection in Ableton production and audio engineering.',
  },
];

export default function Story() {
  return (
    <section id='story' className='relative bg-soot py-28 sm:py-36'>
      <div className='mx-auto max-w-7xl px-5 sm:px-8'>
        <SectionHeading index='02' kicker='The story so far'>
          Built one
          <span className='text-outline'> drop </span>
          at a time.
        </SectionHeading>

        <ol className='mt-20 grid gap-px bg-bone/10 sm:grid-cols-2 lg:grid-cols-4'>
          {chapters.map((c, i) => (
            <Reveal
              as='li'
              key={c.mark}
              delay={i * 120}
              className='group relative bg-soot p-8 transition-colors duration-300 hover:bg-char'
            >
              <span className='label'>
                Chapter {String(i + 1).padStart(2, '0')}
              </span>
              <p className='mt-6 font-display text-7xl leading-none font-black text-bone uppercase transition-colors duration-300 group-hover:text-zia'>
                {c.mark}
              </p>
              <h3 className='mt-6 font-mono text-sm font-semibold tracking-label text-zia uppercase'>
                {c.title}
              </h3>
              <p className='mt-3 leading-relaxed text-bone/65'>{c.body}</p>
              <span className='absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-chile transition-transform duration-500 group-hover:scale-x-100' />
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
