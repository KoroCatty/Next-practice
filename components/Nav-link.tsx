'use client';
import Link from "next/link"
import { usePathname } from "next/navigation";

const NavLink = ({ href, label }: { href: string, label: string }) => {
  const path = usePathname()

  return (
    <Link href={href}
      className={path === href ? "bg-white text-black px-4 py-2" : ""}>
      {label}
    </Link>
  )
}

export default NavLink