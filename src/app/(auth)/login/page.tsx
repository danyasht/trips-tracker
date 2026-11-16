import { Suspense } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { signIn } from '@/features/auth/actions';

async function FormError({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;
  const message = error ? errorMessages[error] : undefined;

  if (!message) return null;
  return <p className="text-sm text-red-600">{message}</p>;
}

const errorMessages: Record<string, string> = {
  'missing-fields': 'Please fill in all fields.',
  'signin-failed':
    'Could not sign you in. Please check your details and try again.',
};

export default function SignInPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription>
          Start planning your next trip with friends.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={signIn} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
            />
          </div>

          <Suspense fallback={null}>
            <FormError searchParams={searchParams} />
          </Suspense>

          <Button type="submit" className="w-full">
            Sign in
          </Button>
        </form>

        <p className="mt-4 text-center text-sm text-stone-600">
          Don&apos;t have an account?{' '}
          <Link
            href="/signup"
            className="font-medium text-green-700 hover:underline"
          >
            Sign up
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
