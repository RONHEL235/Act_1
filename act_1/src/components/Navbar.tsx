import { useState } from 'react'

type NavItem = {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
      <nav className="border-b border-gray-300 bg-gray-50 px-6 py-4 shadow-sm">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        {/* Logo */}
        <h2 className="text-2xl font-bold text-pink-800">Ronee</h2>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-gray-800 hover:text-pink-600 transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger menu button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-pink-800"></span>
            <span className="block w-6 h-0.5 bg-pink-800"></span>
            <span className="block w-6 h-0.5 bg-pink-800"></span>
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="flex flex-col gap-4 mt-4 md:hidden">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="block text-gray-800 hover:text-pink-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}

export default Navbar
