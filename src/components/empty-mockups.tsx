import Link from 'next/link';
import { buttonVariants } from '~/components/ui/button';
import { cn } from '~/lib/utils';

export default function EmptyMockups() {
  return (
    <div className='flex h-screen flex-col items-center justify-center'>
      <div className='w-full max-w-md rounded-lg border bg-white p-8 dark:bg-gray-900'>
        <div className='space-y-4'>
          <div className='text-center'>
            <h2 className='text-2xl font-bold text-gray-900 dark:text-gray-100'>No mockups available.</h2>
          </div>
          <Link href='/register' className={cn(buttonVariants(), 'w-full')}>
            Create One
          </Link>
        </div>
      </div>
    </div>
  );
}
