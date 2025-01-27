import Link from 'next/link';

export function SiteHeader() {
  return (
    <header className='border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container-wrapper'>
        <div className='container flex h-14 items-center'>
          <div className='mr-4 hidden md:flex'>
            <Link
              href='/'
              className='mr-4 flex items-center gap-2 lg:mr-6'
            >
              <span className='hidden font-bold lg:inline-block'>Trave</span>
            </Link>
          </div>
          <div className='flex flex-1 items-center justify-between gap-2 md:justify-end'>
            <div className='w-full flex-1 md:w-auto md:flex-none'></div>
            <nav className='flex items-center gap-0.5'></nav>
          </div>
        </div>
      </div>
    </header>
  );
}
