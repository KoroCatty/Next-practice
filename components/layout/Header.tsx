// components
import NavLink from "@/components/Nav-link"

const Links = [
  { href: "/", label: "Home" },
  { href: "/news", label: "News" },
  { href: "/archive", label: "Archive" },
]

const Header = () => {
  return (
    <>
      <header className="container mx-auto p-6">
        <nav>
          <ul className="flex gap-8 text-2xl">
            {Links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
               <NavLink href={href} label={label}  />
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header