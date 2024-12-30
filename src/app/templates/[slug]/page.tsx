import React from 'react';

import { api } from '~/trpc/server';
import { Config } from '~/lib/types';
import Template1 from '~/templates/template-1';
import { UIConfigProvider } from '~/context/UIConfigProvider';

export default async function MockUpPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const mockUp = await api.mockUp.getBySlug({ slug: params.slug });

  if (!mockUp) return null;
  if (!mockUp.content) return null;

  const config = JSON.parse(JSON.stringify(mockUp?.content)) as Config;

  if (!mockUp.isEnabled)
    return (
      <div className='m-0 flex h-screen w-screen flex-col items-center justify-center bg-white font-sans text-base leading-relaxed text-gray-700 dark:bg-gray-800 dark:text-gray-300'>
        <div className='max-w-full text-center'>
          <strong className='mb-6 block text-3xl'>The mockup is currently disabled</strong>
        </div>
      </div>
    );

  return (
    <UIConfigProvider config={config}>
      <Template1 />
    </UIConfigProvider>
  );
}
