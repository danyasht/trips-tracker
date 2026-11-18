import NewTrip from '@/features/trips/components/new-trip';
import TripsList from '@/features/trips/components/trips-list';
import { getTrips } from '@/features/trips/queries';

export default async function TripsPage() {
  const trips = await getTrips();
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold">Your trips</h1>
      <NewTrip />
      <TripsList trips={trips} />
    </div>
  );
}
