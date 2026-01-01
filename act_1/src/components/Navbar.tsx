type NavItem = {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 border-b">
      <h2 className="text-xl font-semibold">Ronee</h2>

      <ul className="flex gap-6">
        {navItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="text-gray-700 hover:text-black transition-colors"
            >
            {item.label}  
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar