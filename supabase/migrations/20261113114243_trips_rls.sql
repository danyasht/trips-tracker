create policy "Users can read own memberships"
  on trip_members for select
  to authenticated
  using (user_id = (select auth.uid()));

create policy "Members can read their trips"
  on trips for select
  to authenticated
  using (
    exists (
      select 1
      from trip_members
      where trip_members.trip_id = trips.id
        and trip_members.user_id = (select auth.uid())
    )
  );

create policy "Members can create their trips"
  on trips for insert
  to authenticated
  with check (true);

create policy "Organizers can update their trips"
  on trips for update
  to authenticated
  using (
    exists (
      select 1
      from trip_members
      where trip_members.trip_id = trips.id
        and trip_members.user_id = (select auth.uid())
        and trip_members.role = 'organizer'
    )
  )
  with check (
    exists (
      select 1
      from trip_members
      where trip_members.trip_id = trips.id
        and trip_members.user_id = (select auth.uid())
        and trip_members.role = 'organizer'
    )
  );

create policy "Organizers can delete their trips"
  on trips for delete
  to authenticated
  using (
    exists (
      select 1
      from trip_members
      where trip_members.trip_id = trips.id
        and trip_members.user_id = (select auth.uid())
        and trip_members.role = 'organizer'
    )
  );
