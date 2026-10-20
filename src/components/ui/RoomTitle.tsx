export function RoomTitle({ subtitle, title }: { subtitle: string; title: string }) {
  return (
    <header className="room-title">
      <p>{subtitle}</p>
      <h1>{title}</h1>
    </header>
  );
}
