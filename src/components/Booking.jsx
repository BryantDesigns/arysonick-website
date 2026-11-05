import { useState } from 'react';
import siteConfig from '../siteConfig';
import Reveal from './Reveal';
import { ArrowRight, ZiaSun } from './Icons';

const eventTypes = [
  'Wedding',
  'Graduation party',
  'Private event',
  'Club night',
  'Other',
];

export default function Booking() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    type: eventTypes[0],
    date: '',
    details: '',
  });

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const subject = `Booking inquiry: ${form.type}${
      form.date ? ` on ${form.date}` : ''
    }`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Event: ${form.type}`,
      `Date: ${form.date || 'TBD'}`,
      '',
      form.details,
    ].join('\n');
    window.location.href = `mailto:${
      siteConfig.bookingEmail
    }?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section
      id='book'
      className='bg-chile relative isolate overflow-hidden py-28 sm:py-36'
    >
      <ZiaSun className='spin-slow text-ink pointer-events-none absolute -right-56 -top-40 -z-10 h-[44rem] w-[44rem] opacity-20' />
      <div className='mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-2'>
        <Reveal>
          <p className='label text-bone/80 flex items-center gap-4'>
            <span className='text-zia'>05</span>
            <span className='bg-bone/40 h-px w-10' />
            Booking
          </p>
          <h2 className='font-display mt-5 text-6xl font-black uppercase leading-[0.85] tracking-tight sm:text-7xl lg:text-8xl'>
            Let's make
            <br />
            <span className='text-zia'>some noise.</span>
          </h2>
          <p className='text-bone/85 mt-8 max-w-md text-lg leading-relaxed'>
            Got a date in mind? Send the details and Nick will get back to you
            about availability and setup.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <form
            onSubmit={submit}
            className='bg-ink p-8 sm:p-10'
            style={{ boxShadow: '12px 12px 0 0 #ffc72c' }}
          >
            <div className='grid gap-8 sm:grid-cols-2'>
              <label className='block'>
                <span className='label'>Name</span>
                <input
                  required
                  name='name'
                  value={form.name}
                  onChange={update}
                  className='field'
                  placeholder='Your name'
                  autoComplete='name'
                />
              </label>
              <label className='block'>
                <span className='label'>Email</span>
                <input
                  required
                  type='email'
                  name='email'
                  value={form.email}
                  onChange={update}
                  className='field'
                  placeholder='you@email.com'
                  autoComplete='email'
                />
              </label>
              <label className='block'>
                <span className='label'>Event type</span>
                <select
                  name='type'
                  value={form.type}
                  onChange={update}
                  className='field bg-ink'
                >
                  {eventTypes.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </label>
              <label className='block'>
                <span className='label'>Date</span>
                <input
                  type='date'
                  name='date'
                  value={form.date}
                  onChange={update}
                  className='field [color-scheme:dark]'
                />
              </label>
              <label className='block sm:col-span-2'>
                <span className='label'>Details</span>
                <textarea
                  name='details'
                  rows={4}
                  value={form.details}
                  onChange={update}
                  className='field resize-none'
                  placeholder='Venue, guest count, vibe, must-play songs…'
                />
              </label>
            </div>
            <button
              type='submit'
              className='btn-primary mt-10 w-full justify-center'
            >
              Send inquiry <ArrowRight className='h-4 w-4' />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
