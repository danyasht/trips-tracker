'use server';

import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';

export async function signUp(formData: FormData) {
  const email = String(formData.get('email') ?? '').trim();
  const password = String(formData.get('password') ?? '');
  const firstName = String(formData.get('firstName') ?? '').trim();
  const lastName = String(formData.get('lastName') ?? '').trim();

  if (!email || !firstName || !lastName) {
    redirect('/signup?error=missing-fields');
  }
  if (password.length < 8) {
    redirect('/signup?error=weak-password');
  }

  const supabase = await createClient();

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { first_name: firstName, last_name: lastName },
    },
  });

  if (error) {
    redirect('/signup?error=signup-failed');
  }

  redirect('/trips');
}

export async function signIn(formData: FormData) {
  const email = String(formData.get('email') ?? '').trim();
  const password = String(formData.get('password') ?? '');

  if (!email || !password) {
    redirect('/login?error=missing-fields');
  }

  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    redirect('/login?error=signin-failed');
  }

  redirect('/trips');
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();

  redirect('/login');
}
