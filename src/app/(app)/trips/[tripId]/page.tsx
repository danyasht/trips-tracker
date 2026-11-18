import Link from 'next/link';
import { getTrip } from '@/features/trips/queries';
import { formatDates } from '@/features/trips/format';

export default async function TripPage({
  params,
}: {
  params: Promise<{ tripId: string }>;
}) {
  const { tripId } = await params;
  const trip = await getTrip(tripId);

  return (
    <div className="flex flex-col gap-6">
      <Link
        href="/trips"
        className="text-sm text-stone-500 hover:text-stone-800"
      >
        ← Your trips
      </Link>
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold">{trip.name}</h1>
        <p className="text-sm text-stone-500">
          {formatDates(trip.start_date, trip.planned_end_date)}
        </p>
      </div>
    </div>
  );
}
