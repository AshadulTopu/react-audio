export default function PlayerControl(props) {
  return (
    <div>
      <button onClick={() => props.setIsPlaying(!props.isPlaying)}>
        {" "}
        {props.isPlaying ? "Pause" : "Play"}{" "}
      </button>
      <button onClick={() => props.skipSong(true)}> Next </button>
      <button onClick={() => props.skipSong(false)}> Previous </button>
    </div>
  );
}
