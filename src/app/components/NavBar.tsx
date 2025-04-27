"use client";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-3 bg-background border-b border-border sticky top-0 z-50">
      <div className="flex items-center gap-4">
        <Link href="/" className="font-bold text-lg">Windsail</Link>
        {/* Add more nav links here as needed */}
      </div>
      <div className="flex items-center gap-2">
        <ThemeToggle />
      </div>
    </nav>
  );
}
