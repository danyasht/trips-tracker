import Link from 'next/link';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-stone-50 text-stone-800">
      <header className="border-b border-stone-200">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <Link href="/" className="text-lg font-semibold">
            Trips Tracker
          </Link>
          <nav className="flex items-center gap-4 text-sm">
            <Link href="/about" className="hover:underline">
              About
            </Link>
            <Link href="/login" className="hover:underline">
              Log in
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-stone-200 py-6 text-center text-sm text-stone-500">
        Trips Tracker
      </footer>
    </div>
  );
}
