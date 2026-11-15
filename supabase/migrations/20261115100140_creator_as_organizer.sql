create function add_creator_as_organizer()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.trip_members (trip_id, user_id, role)
  values (new.id, auth.uid(), 'organizer');
  return new;
end;
$$;

create trigger on_trip_created
  after insert on trips
  for each row
  execute function add_creator_as_organizer();