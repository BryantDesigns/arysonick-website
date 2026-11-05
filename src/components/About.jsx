import NickImage from '../images/nick.jpg';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const Name = () => <span className='text-zia font-semibold'>ARYSON!CK</span>;

export default function About() {
  return (
    <section id='about' className='relative py-28 sm:py-36'>
      <div className='mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-12 lg:gap-12'>
        <Reveal className='relative lg:col-span-5'>
          <div className='bg-chile absolute -left-3 -top-3 h-full w-full sm:-left-5 sm:-top-5' />
          <div className='bg-char relative aspect-[4/5] overflow-hidden'>
            <img
              src={NickImage}
              alt='Nick Santangelo, aka ARYSON!CK, pointing at the camera'
              className='h-full w-full object-cover object-[55%_center]'
              loading='lazy'
            />
          </div>
          <p className='bg-zia tracking-label text-ink absolute -bottom-5 right-4 rotate-[-3deg] px-4 py-2 font-mono text-xs font-semibold uppercase shadow-lg'>
            Nick Santangelo
          </p>
        </Reveal>

        <div className='lg:col-span-7 lg:pl-8'>
          <SectionHeading index='01' kicker='About'>
            From bedroom beats
            <br />
            <span className='text-zia'>to the decks.</span>
          </SectionHeading>

          <Reveal
            delay={150}
            className='text-bone/75 mt-10 space-y-6 text-lg leading-relaxed'
          >
            <p className='text-bone text-xl'>
              Nick Santangelo — better known as <Name /> — is an up-and-coming
              EDM DJ and producer born and raised in Albuquerque, New Mexico.
            </p>
            <p>
              He started producing hip-hop at sixteen as a hobby. Over the years
              that hobby turned into a full-blown passion for music, and that
              producer's ear shapes every set he plays.
            </p>
            <p>
              Now <Name /> is taking it to the next level at the Recording Radio
              Film Connection school, earning certificates in Ableton production
              and audio engineering.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
