// components/Header.js
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow py-5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center">
          <div className="text-lg font-semibold text-gray-700 dark:text-white">
            <Link href="/">DevHabit</Link>
          </div>
          <nav className="flex space-x-4">
            <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:underline">About
            </Link>
            <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:underline">Contact
            </Link>
            {/* Add more navigation items here */}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
