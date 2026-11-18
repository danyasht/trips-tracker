'use client';

import { Suspense, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { createTrip } from '@/features/trips/actions';

export default function NewTrip() {
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen) {
    return (
      <Button
        className="w-full sm:w-auto sm:self-start"
        onClick={() => setIsOpen(true)}
      >
        New trip
      </Button>
    );
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>New trip</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={createTrip} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" required />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="startDate">Start</Label>
              <Input id="startDate" name="startDate" type="date" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="endDate">End</Label>
              <Input id="endDate" name="endDate" type="date" />
            </div>
          </div>
          <div className="flex gap-2">
            <Button type="submit">Create</Button>
            <Button
              type="button"
              variant="ghost"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
