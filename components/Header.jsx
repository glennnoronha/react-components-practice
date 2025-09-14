import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white">
      <div className="flex items-center justify-around py-6">
        <h1 className="text-2xl font-bold text-blue-400">React Practice</h1>
        <nav>
          <ul className="flex gap-6 font-bold">
            <li>
              <Link className="nav-link" href="/">Home</Link>
            </li>
            <li>
              <Link className="nav-link" href="/practice">Practice</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
