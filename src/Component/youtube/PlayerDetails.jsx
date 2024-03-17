export default function PlayerDetails(props) {
//   console.log(props);
  return (
    <div>
      <p>{props.song.name}</p>
      <span>{props.song.artist}</span>
    </div>
  );
}
