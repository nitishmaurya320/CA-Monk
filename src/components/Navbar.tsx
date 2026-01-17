import React from 'react'

const Navbar = () => {
   return (
    <nav className="flex items-center justify-between px-8 border-2 py-4 border-b border-gray-200 bg-white">
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-indigo-600 text-white font-semibold text-sm">
          C
        </div>
        <span className="font-semibold text-gray-900 tracking-wide">
          CA MONK
        </span>
      </div>

      <ul className="hidden md:flex items-center gap-8 text-sm text-gray-600">
        <li className="cursor-pointer hover:text-gray-900">Tools</li>
        <li className="cursor-pointer hover:text-gray-900">Practice</li>
        <li className="cursor-pointer hover:text-gray-900">Events</li>
        <li className="cursor-pointer hover:text-gray-900">Job Board</li>
        <li className="cursor-pointer hover:text-gray-900">Points</li>
      </ul>

      <button className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
        Profile
      </button>
    </nav>
  );
}

export default Navbar