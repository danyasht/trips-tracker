import Link from 'next/link';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-stone-50 px-4 py-10 text-stone-800">
      <Link href="/" className="text-lg font-semibold">
        Trips Tracker
      </Link>
      <div className="w-full max-w-sm">{children}</div>
    </div>
  );
}
