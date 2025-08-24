import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "../common/ThemeToggle";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "About" },
  { to: "/categories", label: "Categories" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="border-b bg-white dark:bg-gray-900 sticky top-0 z-50 w-full mx-auto">
      <div className="container flex items-center justify-between py-3">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold text-sky-600 dark:text-sky-400 pl-16"
        >
          Blogfolio
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 pr-20">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `font-medium transition-colors ${
                  isActive
                    ? "text-sky-600 dark:text-sky-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-sky-600"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded bg-gray-200 dark:bg-gray-800 mr-8"
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="overflow-hidden md:hidden bg-white dark:bg-gray-900 border-t"
          >
            <div className="flex flex-col p-4 space-y-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block font-medium ${
                      isActive
                        ? "text-sky-600 dark:text-sky-400"
                        : "text-gray-700 dark:text-gray-300 hover:text-sky-600"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
