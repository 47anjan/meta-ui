'use client';

import React from 'react';

import { useUIConfig } from '~/context/UIConfigProvider';

import Image from '~/components/mock-up/image';
import Button from '~/components/mock-up/button';

export default function FeatureSection() {
  const { servicesSection } = useUIConfig();

  if (!servicesSection) return null;

  return (
    <div className='w-full bg-white py-[60px] lg:py-[120px]'>
      <div id='services' className='mx-[10px] max-w-[1280px] xl:mx-auto'>
        <div className='flex flex-col-reverse items-center gap-8 lg:flex-row'>
          {servicesSection.serviceImage && (
            <div className='w-full flex-1 lg:max-w-[640px]'>
              <Image
                src={servicesSection?.serviceImage?.src ?? '/images/feature.jpg'}
                width={1024}
                height={1024}
                alt={servicesSection?.serviceImage?.alt ?? 'service image'}
                className='max-h-[750px] w-full rounded-[8px] object-cover'
              />
            </div>
          )}
          <div className='flex flex-1 flex-col space-y-6 lg:space-y-12'>
            {servicesSection.services && (
              <div className='flex flex-col space-y-3 lg:space-y-4'>
                <span className='text-[15px] font-[500] leading-[30px] text-[#3B82F6] lg:text-[20px]'>
                  {servicesSection?.label ?? 'Services'}
                </span>
                <span className='text-[36px] font-[700] leading-[40px] text-[#02050B] lg:text-[48px] lg:leading-[60px]'>
                  {servicesSection?.heading ?? 'Our Featured  Services'}
                </span>
                <div className='flex flex-col space-y-2 lg:flex-row lg:space-x-4 lg:space-y-0'>
                  <span className='flex-1 cursor-default rounded-full border-[1px] border-[#02050B] px-5 py-2 text-center text-[16px] font-[500] leading-[28px] text-[#02050B] transition-all hover:bg-[#02050B] hover:text-white lg:py-[14px]'>
                    {servicesSection?.services[0]?.title ?? 'Tree Removal'}
                  </span>
                  <span className='flex-1 cursor-default rounded-full border-[1px] border-[#02050B] px-5 py-2 text-center text-[16px] font-[500] leading-[28px] text-[#02050B] transition-all hover:bg-[#02050B] hover:text-white lg:py-[14px]'>
                    {servicesSection?.services[1]?.title ?? 'Tree Pruning and Trimming'}
                  </span>
                </div>
                <span className='cursor-default rounded-full border-[1px] border-[#3B82F6] bg-[#3B82F6] px-5 py-2 text-center text-[16px] font-[500] leading-[28px] text-white transition-all hover:bg-white hover:text-[#3B82F6] lg:py-[14px]'>
                  {servicesSection?.services[2]?.title ?? 'Emergency Tree Services'}
                </span>
              </div>
            )}

            <div className='flex flex-col space-y-2 lg:space-y-4'>
              <span className='text-[15px] font-[500] leading-[30px] text-[#3B82F6] lg:text-[20px]'>
                {servicesSection?.serviceContent?.subheading ?? 'Based on New York'}
              </span>
              <div className='flex flex-col space-y-3 lg:space-y-6'>
                <span className='text-[25px] font-[700] leading-[35px] text-[#02050B] lg:text-[32px] lg:leading-[44px]'>
                  {servicesSection?.serviceContent?.heading ?? 'Tree Cutting Service'}
                </span>
                <p className='text-[16px] leading-[24px] text-[#02050BB2]'>
                  {servicesSection?.serviceContent?.info ??
                    'Tree Jaws in New York - Your trusted partner for safe, efficient, and professional tree cutting solutions. Our expert team is dedicated to keeping your property safe and your landscape well-maintained. Whether it is removing hazardous trees, precise pruning, or handling emergency tree issues, we have got you covered. Count on us for quality craftsmanship and exceptional customer service. When nature’s challenges arise, Tree-Jaws has your back.'}
                </p>
                {servicesSection.callToAction && (
                  <Button size='medium' className='w-fit'>
                    {servicesSection?.callToAction?.label ?? 'Call Today!'}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
