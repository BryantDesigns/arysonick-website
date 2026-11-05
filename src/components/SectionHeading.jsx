import Reveal from './Reveal';

export default function SectionHeading({
  index,
  kicker,
  children,
  className = '',
}) {
  return (
    <Reveal className={className}>
      <p className='flex items-center gap-4 label'>
        <span className='text-zia'>{index}</span>
        <span className='h-px w-10 bg-bone/30' />
        {kicker}
      </p>
      <h2 className='mt-5 font-display text-5xl leading-[0.9] font-black tracking-tight uppercase sm:text-6xl lg:text-7xl'>
        {children}
      </h2>
    </Reveal>
  );
}
