import React from "react";
import Link from "next/link";

const subjects = [
  { name: "HTML", href: "#" },
  { name: "CSS", href: "#" },
  { name: "JavaScript", href: "#" },
  { name: "Python", href: "#" },
  { name: "Java", href: "#" },
  { name: "SQL", href: "#" },
  { name: "React", href: "#" },
];

const sections = [
  { name: "Academy", href: "#" },
  { name: "Students", href: "#" },
  { name: "Teachers", href: "#/TeachersPage" },
  { name: "Institutions", href: "/Institutions" },
];

const Navigation = () => {
  return (
    <div className="w-full">
      {/* Main Navbar */}
      <nav className="bg-white shadow-orange-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold text-green-500">
                MiniMinds
              </Link>
            </div>

            <div className="hidden sm:flex sm:space-x-8">
              {sections.map((section) => (
                <div key={section.name} className="relative group">
                  {section.href === "/Institutions" ? (
                    <Link
                      href={section.href}
                      className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                    >
                      {section.name}
                    </Link>
                  ) : (
                    <button className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors inline-flex items-center">
                      {section.name}
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button className="bg-green-400 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
                Sign Up
              </button>
              <button className="bg-purple-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-secondary/90 transition-colors">
                Log In
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Second Navbar for Subjects */}
      <nav className="bg-gray-50  border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-6 py-2">
            {subjects.map((subject) => (
              <Link
                key={subject.name}
                href={subject.href}
                className="text-gray-700 hover:text-green-600 text-sm font-medium transition-colors"
              >
                {subject.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
