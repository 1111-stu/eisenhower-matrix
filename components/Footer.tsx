'use client';

export function Footer() {
  return (
    <footer className="border-t-2 border-[#383838] bg-white mt-8 sm:mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 text-center">
        <p className="text-xs sm:text-sm text-gray-600">
          🦆 Built with{' '}
          <a
            href="https://motherduck.com"
            className="underline hover:opacity-70 transition-opacity"
          >
            MotherDuck
          </a>{' '}
          Design System
        </p>
      </div>
    </footer>
  );
}
