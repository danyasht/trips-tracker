'use server';

import { createClient } from '@/lib/supabase/server';
import { getUser } from '@/features/auth/queries';
import { redirect } from 'next/navigation';

export async function createTrip(formData: FormData) {
  await getUser();

  const tripName = String(formData.get('name') ?? '').trim();
  const startDate = String(formData.get('startDate') ?? '').trim();
  const endDate = String(formData.get('endDate') ?? '').trim();

  if (!tripName) {
    redirect('/trips?error=missing-fields');
  }

  if (startDate && endDate && endDate < startDate) {
    redirect('/trips?error=invalid-date');
  }

  const supabase = await createClient();

  const { error } = await supabase.from('trips').insert([
    {
      name: tripName,
      start_date: startDate || null,
      planned_end_date: endDate || null,
    },
  ]);

  if (error) redirect('/trips?error=create-failed');

  redirect('/trips');
}
