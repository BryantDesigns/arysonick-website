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
    <section id='story' className='bg-soot relative py-28 sm:py-36'>
      <div className='mx-auto max-w-7xl px-5 sm:px-8'>
        <SectionHeading index='02' kicker='The story so far'>
          Built one
          <span className='text-outline'> drop </span>
          at a time.
        </SectionHeading>

        <ol className='bg-bone/10 mt-20 grid gap-px sm:grid-cols-2 lg:grid-cols-4'>
          {chapters.map((c, i) => (
            <Reveal
              as='li'
              key={c.mark}
              delay={i * 120}
              className='group bg-soot hover:bg-char relative p-8 transition-colors duration-300'
            >
              <span className='label'>
                Chapter {String(i + 1).padStart(2, '0')}
              </span>
              <p className='font-display text-bone group-hover:text-zia mt-6 text-7xl font-black uppercase leading-none transition-colors duration-300'>
                {c.mark}
              </p>
              <h3 className='tracking-label text-zia mt-6 font-mono text-sm font-semibold uppercase'>
                {c.title}
              </h3>
              <p className='text-bone/65 mt-3 leading-relaxed'>{c.body}</p>
              <span className='bg-chile absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100' />
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
