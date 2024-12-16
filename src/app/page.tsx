import Link from 'next/link';

import { HydrateClient } from '~/trpc/server';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { cn } from '~/lib/utils';

import { ModeToggle } from '~/components/mode-toggle';
import { Button, buttonVariants } from '~/components/ui/button';

export default function Home() {
  return (
    <HydrateClient>
      <div>
        <header>
          <nav className='fixed inset-x-0 top-0 z-50 border-b'>
            <div className='flex h-14 w-full items-center justify-end gap-4 px-4'>
              <SignedOut>
                <Button variant='outline'>
                  <SignInButton />
                </Button>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
              <ModeToggle />
            </div>
          </nav>
        </header>
        <main className='flex min-h-screen flex-col items-center justify-center gap-4'>
          <SignedIn>
            <div className='flex flex-col items-center gap-4'>
              <Link className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'w-52')} href='/dashboard'>
                Dashboard
              </Link>
              <Link className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'w-52')} href='/register'>
                Register
              </Link>
            </div>
          </SignedIn>
        </main>
      </div>
    </HydrateClient>
  );
}
