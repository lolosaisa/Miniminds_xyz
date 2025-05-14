
import React from "react";
//import { Link } from "react-router-dom";
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
  { name: "Teachers", href: "#" },
  { name: "Institutions", href: "/institution" },
];

const Navigation = () => {
  return (
    <div className="w-full">
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold text-primary">MiniMinds</Link>
            </div>
            
            <div className="hidden sm:flex sm:space-x-8">
              {sections.map((section) => (
                <div key={section.name} className="relative group">
                  {section.href === "/institution" ? (
                    <Link href={section.href} className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                      {section.name}
                    </Link>
                  ) : (
                    <button className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors inline-flex items-center">
                      {section.name}
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )}
                  
                  {section.href !== "/institution" && (
                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-1">
                        {subjects.map((subject) => (
                          <a
                            key={subject.name}
                            href={subject.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {subject.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
                Sign Up
              </button>
              <button className="bg-secondary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-secondary/90 transition-colors">
                Log In
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
