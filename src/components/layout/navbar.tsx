import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { signOut } from '@/features/auth/actions';

export default function Navbar() {
  return (
    <header className="border-b border-stone-200">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/trips" className="text-lg font-semibold">
          Trips Tracker
        </Link>
        <form action={signOut}>
          <Button type="submit" variant="ghost" size="sm">
            Sign out
          </Button>
        </form>
      </div>
    </header>
  );
}
