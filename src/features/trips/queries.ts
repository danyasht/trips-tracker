import { createClient } from '@/lib/supabase/server';
import { getUser } from '@/features/auth/queries';
import { notFound } from 'next/navigation';

export async function getTrips() {
  await getUser();
  const supabase = await createClient();

  const { data: trips, error } = await supabase
    .from('trips')
    .select('id,name,start_date,planned_end_date')
    .order('start_date', { ascending: true });

  if (error) throw new Error('Failed to load trips');

  return trips;
}

export async function getTrip(id: string) {
  await getUser();
  const supabase = await createClient();

  const { data: trip, error } = await supabase
    .from('trips')
    .select('id,name,start_date,planned_end_date')
    .eq('id', id)
    .maybeSingle();

  if (error) throw new Error('Failed to load trip');
  if (!trip) notFound();

  return trip;
}
