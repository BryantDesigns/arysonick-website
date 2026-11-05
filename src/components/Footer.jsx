import Logo from '../images/logo_light.png';
import siteConfig from '../siteConfig';
import { SocialIcon } from './Icons';

export default function Footer() {
  return (
    <footer className='bg-ink'>
      <div className='mx-auto max-w-7xl px-5 py-16 sm:px-8'>
        <div className='flex flex-col items-start justify-between gap-10 md:flex-row md:items-center'>
          <img src={Logo} alt='ARYSON!CK' className='h-10 w-auto' />
          <div className='flex items-center gap-3'>
            {siteConfig.socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                className='grid h-12 w-12 place-items-center border border-bone/20 text-bone transition hover:border-zia hover:bg-zia hover:text-ink'
              >
                <span className='sr-only'>{s.name}</span>
                <SocialIcon name={s.name} className='h-5 w-5' />
              </a>
            ))}
          </div>
        </div>
        <div className='mt-12 flex flex-col justify-between gap-4 border-t border-bone/10 pt-8 sm:flex-row'>
          <p className='label'>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <a href='#top' className='label transition hover:text-zia'>
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
