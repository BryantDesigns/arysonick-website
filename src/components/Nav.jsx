import { useEffect, useState } from 'react';
import Logo from '../images/logo_light.png';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Story', href: '#story' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        scrolled || open
          ? 'border-b border-bone/10 bg-ink/85 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className='mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8'>
        <a href='#top' onClick={close} className='shrink-0'>
          <img src={Logo} alt='ARYSON!CK' className='h-7 w-auto sm:h-8' />
        </a>

        <ul className='hidden items-center gap-10 md:flex'>
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className='label text-bone/70 transition hover:text-zia'
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href='#book' className='btn-primary px-5! py-3!'>
              Book a set
            </a>
          </li>
        </ul>

        <button
          type='button'
          className='relative h-10 w-10 md:hidden'
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`absolute right-2 left-2 h-0.5 bg-bone transition ${
              open ? 'top-1/2 rotate-45' : 'top-[14px]'
            }`}
          />
          <span
            className={`absolute right-2 left-2 h-0.5 bg-bone transition ${
              open ? 'top-1/2 -rotate-45' : 'top-[24px]'
            }`}
          />
        </button>
      </nav>

      {open && (
        <div className='border-t border-bone/10 px-5 pb-8 md:hidden'>
          <ul className='flex flex-col'>
            {links.map((l) => (
              <li key={l.href} className='border-b border-bone/10'>
                <a
                  href={l.href}
                  onClick={close}
                  className='block py-4 font-display text-3xl font-black uppercase'
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a href='#book' onClick={close} className='mt-8 btn-primary'>
            Book a set
          </a>
        </div>
      )}
    </header>
  );
}
