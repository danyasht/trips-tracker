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
import { signUp } from '@/features/auth/actions';

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
  'weak-password': 'Password must be at least 8 characters.',
  'signup-failed':
    'Could not create your account. Please check your details and try again.',
};

export default function SignUpPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Create your account</CardTitle>
        <CardDescription>
          Start planning your next trip with friends.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={signUp} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="firstName">First name</Label>
            <Input
              id="firstName"
              name="firstName"
              type="text"
              autoComplete="given-name"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="lastName">Last name</Label>
            <Input
              id="lastName"
              name="lastName"
              type="text"
              autoComplete="family-name"
              required
            />
          </div>
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
              autoComplete="new-password"
              minLength={8}
              required
            />
          </div>

          <Suspense fallback={null}>
            <FormError searchParams={searchParams} />
          </Suspense>

          <Button type="submit" className="w-full">
            Sign up
          </Button>
        </form>

        <p className="mt-4 text-center text-sm text-stone-600">
          Already have an account?{' '}
          <Link
            href="/login"
            className="font-medium text-green-700 hover:underline"
          >
            Log in
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
