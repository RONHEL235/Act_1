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
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Ronee</h2>

      <ul style={styles.ul}>
        {navItems.map((item) => (
          <li key={item.label}>
            <a href={item.href} style={styles.link}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 32px',
    borderBottom: '1px solid #eaeaea',
  },
  logo: {
    margin: 0,
  },
  ul: {
    listStyle: 'none',
    display: 'flex',
    gap: '24px',
    margin: 0,
    padding: 0,
  },
  link: {
    textDecoration: 'none',
    color: '#000',
    fontWeight: 500,
  },
}
