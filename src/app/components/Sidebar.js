"use client"
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const navigation = [
  { name: 'Overview', href: '/', icon: 'icons/overview.svg' },
//   { name: 'Study Session', href: '/session', icon: 'icons/workout.svg' },
  { name: 'Library', href: '/library', icon: 'icons/diet.svg' },
  { name: 'Goals', href: '/goals', icon: 'icons/goals.svg' },
  { name: 'My Schedule', href: '/schedule', icon: 'icons/schedule.svg' },
  { name: 'Progress', href: '/progress', icon: 'icons/progress.svg' },
];

const Sidebar = () => {
  const router = useRouter();

  return (
    <aside className="flex max-w-md h-screen" aria-label="Sidebar">
      <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-900">
        <ul className="space-y-2">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link href={item.href} 
                  className={`flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ${
                    router.pathname === item.href
                      ? 'bg-gray-200 dark:bg-gray-700'
                      : ''
                  }`}
                >
                  <img src={item.icon} alt="" className="w-6 h-6" />
                  <span className="ml-3">{item.name}</span>
    
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
