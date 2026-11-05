import Reveal from './Reveal';

export default function SectionHeading({
  index,
  kicker,
  children,
  className = '',
}) {
  return (
    <Reveal className={className}>
      <p className='label flex items-center gap-4'>
        <span className='text-zia'>{index}</span>
        <span className='bg-bone/30 h-px w-10' />
        {kicker}
      </p>
      <h2 className='font-display mt-5 text-5xl font-black uppercase leading-[0.9] tracking-tight sm:text-6xl lg:text-7xl'>
        {children}
      </h2>
    </Reveal>
  );
}
