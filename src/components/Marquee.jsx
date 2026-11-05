import { ZiaSun } from './Icons';

const words = [
  'Weddings',
  'Graduation Parties',
  'Club Nights',
  'Private Events',
  'Original Production',
  'Albuquerque, NM',
];

export default function Marquee({ reverse = false, tone = 'zia' }) {
  const styles = tone === 'zia' ? 'bg-zia text-ink' : 'bg-chile text-bone';
  const row = (hidden) => (
    <div className='flex shrink-0 items-center' aria-hidden={hidden}>
      {words.map((w) => (
        <span key={w} className='flex items-center'>
          <span className='font-display px-6 text-3xl font-black uppercase tracking-tight sm:text-4xl'>
            {w}
          </span>
          <ZiaSun className='h-7 w-7' strokeWidth={14} />
        </span>
      ))}
    </div>
  );
  return (
    <div className={`overflow-hidden py-4 ${styles}`}>
      <div className={`marquee ${reverse ? 'marquee-reverse' : ''}`}>
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
