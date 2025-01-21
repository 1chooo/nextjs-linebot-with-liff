import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Header() {
  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between">
        <h1 className="text-xl font-bold">1chooo</h1>
        <nav className="flex items-center space-x-4">
          <Link href="/">
            <Button variant="ghost">Home</Button>
          </Link>
          <Link href="/about">
            <Button variant="ghost">About</Button>
          </Link>
          <Link href="/contact">
            <Button variant="ghost">Contact</Button>
          </Link>
        </nav>
      </div>
    </header>
  )
}

