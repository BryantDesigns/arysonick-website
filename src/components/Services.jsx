import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { ArrowRight } from './Icons';

const services = [
  {
    name: 'Weddings',
    body: 'From the first dance to the last song — a dance floor that stays full all night.',
  },
  {
    name: 'Graduation Parties',
    body: 'Big energy for the big milestone. Current hits, throwbacks, and requests.',
  },
  {
    name: 'Private & Club Events',
    body: 'Birthdays, corporate nights and club sets with festival-grade EDM.',
  },
];

export default function Services() {
  return (
    <section id='services' className='py-28 sm:py-36'>
      <div className='mx-auto max-w-7xl px-5 sm:px-8'>
        <div className='grid gap-10 lg:grid-cols-12'>
          <SectionHeading
            index='03'
            kicker='Services'
            className='lg:col-span-5'
          >
            What he
            <br />
            plays for.
          </SectionHeading>
          <Reveal
            delay={150}
            className='text-bone/65 self-end text-lg leading-relaxed lg:col-span-6 lg:col-start-7'
          >
            Every set is tailored to the room. Tell Nick about your event and
            he'll build the soundtrack around it.
          </Reveal>
        </div>

        <ul className='border-bone/15 mt-16 border-t'>
          {services.map((s, i) => (
            <Reveal
              as='li'
              key={s.name}
              delay={i * 100}
              className='border-bone/15 border-b'
            >
              <a
                href='#book'
                className='group hover:bg-zia hover:text-ink grid items-center gap-4 py-8 transition-colors duration-300 sm:grid-cols-12 sm:px-4'
              >
                <span className='text-zia group-hover:text-chile font-mono text-sm transition-colors sm:col-span-1'>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className='font-display text-4xl font-black uppercase leading-none tracking-tight sm:col-span-5 sm:text-5xl'>
                  {s.name}
                </span>
                <span className='text-bone/65 group-hover:text-ink/80 transition-colors sm:col-span-5'>
                  {s.body}
                </span>
                <ArrowRight className='hidden h-6 w-6 -translate-x-2 justify-self-end opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100 sm:col-span-1 sm:block' />
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
