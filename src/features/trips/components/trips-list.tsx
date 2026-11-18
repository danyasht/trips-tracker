import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Trip } from '@/features/trips/types';

function formatDate(date: string) {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(date));
}

function formatDates(start: string | null, end: string | null) {
  if (start && end) return `${formatDate(start)} – ${formatDate(end)}`;
  if (start) return `From ${formatDate(start)}`;
  if (end) return `Until ${formatDate(end)}`;
  return 'Dates not set';
}

export default function TripsList({ trips }: { trips: Trip[] }) {
  if (trips.length === 0) {
    return (
      <p className="text-sm text-stone-500">
        No trips yet. Create your first one!
      </p>
    );
  }

  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {trips.map((trip) => (
        <li key={trip.id}>
          <Link
            href={`/trips/${trip.id}`}
            className="block rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-stone-400"
          >
            <Card className="h-full transition-colors hover:bg-stone-100">
              <CardHeader>
                <CardTitle>{trip.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-stone-500">
                {formatDates(trip.start_date, trip.planned_end_date)}
              </CardContent>
            </Card>
          </Link>
        </li>
      ))}
    </ul>
  );
}
