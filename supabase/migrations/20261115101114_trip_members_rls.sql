create policy "Members can see other members of a trip"
  on trip_members for select
  to authenticated
  using (public.is_trip_member(trip_id));

create policy "Organizers can add people to a trip"
  on trip_members for insert
  to authenticated
  with check (public.is_trip_organizer(trip_id));

create policy "Organizers can update roles"
  on trip_members for update
  to authenticated
  using (public.is_trip_organizer(trip_id))
  with check (public.is_trip_organizer(trip_id));

create policy "Organizers can remove people from a trip"
  on trip_members for delete
  to authenticated
  using (
    public.is_trip_organizer(trip_id)
    or (user_id = (select auth.uid()))
  );
