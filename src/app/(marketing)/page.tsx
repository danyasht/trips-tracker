import Link from 'next/link';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const features = [
  {
    title: 'Create your trip',
    description:
      'Set the dates, meeting point and accommodation in one shared place.',
  },
  {
    title: 'Invite your friends',
    description:
      'Share a link or QR code and choose whether they can view or edit.',
  },
  {
    title: "Don't forget anything",
    description: 'Track the gear you need and who is bringing what.',
  },
  {
    title: 'Plan your path',
    description: 'Pin camps, viewpoints, water and parking on a map.',
  },
];

export default function HomePage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Plan your hike together, in one place
        </h1>
        <p className="mt-6 text-lg text-stone-600">
          Gear lists, meeting points and routes for your group trip, without
          forwarding messy notes back and forth.
        </p>
        <Link
          href="/signup"
          className="mt-8 inline-block rounded-lg bg-green-700 px-6 py-3 font-medium text-white hover:bg-green-800"
        >
          Get started
        </Link>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-16 text-center">
        <h2 className="text-2xl font-semibold">What problem does it solve?</h2>
        <p className="mt-4 text-stone-600">
          Today trip details live in separate notes and chats. Friends miss
          updates and nobody knows who is bringing the tent. Trips Tracker puts
          everything in one shared space.
        </p>
      </section>

      <section className="mx-auto grid max-w-5xl gap-4 px-4 pb-20 sm:grid-cols-2">
        {features.map((feature) => (
          <Card key={feature.title}>
            <CardHeader>
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </section>
    </>
  );
}
