'use client';

import React from 'react';

import { useUIConfig } from '~/context/UIConfigProvider';

const Hero2 = () => {
  const { heroSection } = useUIConfig();

  if (!heroSection) return null;

  return (
    <section className='bg-white py-12 sm:py-24'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mb-8 flex justify-center'>
          <p className='relative rounded-full px-4 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-inset ring-gray-900/10 hover:ring-gray-900/20'>
            {heroSection?.label ?? 'Your Top Choice for Quality and Reliability!'}
          </p>
        </div>
        <div className='mx-auto max-w-2xl text-center'>
          <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
            {' '}
            {heroSection?.heading ?? 'Best Services in New york'}
          </h1>
          <p className='mt-6 text-lg leading-8 text-gray-600'>
            {heroSection?.subheading ?? '24/7 Emergency Service In New york'}
          </p>
          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <a
              href='#'
              className='focus-visible:outline-bg-blue rounded-md bg-blue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
            >
              {heroSection?.callToAction?.label ?? 'Get Started'}
            </a>
          </div>
        </div>
        <div className='mt-10 flow-root sm:mt-20'>
          <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
            <img
              src={heroSection?.heroImage?.src ?? '/images/hero.jpg'}
              width='2432'
              height='1442'
              alt={heroSection?.heroImage?.alt ?? 'hero image'}
              className='max-h-[700px] rounded-md object-cover shadow-2xl ring-1 ring-gray-900/10'
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero2;
