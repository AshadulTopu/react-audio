import { useEffect, useRef, useState } from "react";
import PlayerControl from "./PlayerControl";
import PlayerDetails from "./PlayerDetails";

export default function Player(props) {
  // const { currentSongIndex, setCurrentSongIndex } = props;
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  }, [isPlaying]);

  const skipSong = (forwards = true) => {
    if (forwards) {
      props.setCurrentSongIndex(() => {
        let tempIndex = props.currentSongIndex + 1;
        if (tempIndex > props.songs.length - 1) {
          tempIndex = 0;
        }
        return tempIndex;
      });
    } else {
      props.setCurrentSongIndex(() => {
        let tempIndex = props.currentSongIndex - 1;
        if (tempIndex < 0) {
          tempIndex = props.songs.length - 1;
        }
        return tempIndex;
      });
    }
  };

  //   const onScrub = (value) => {
  // Clear any timers already running
  // if (ScrubTimer) {
  //   clearInterval(ScrubTimer);
  // }
  // Update it
  // ScrubTimer = setInterval(() => {
  //   const { currentTime } = audioEl.current;
  //   if (currentTime >= value) {
  //     clearInterval(ScrubTimer);
  //     ScrubTimer = null;
  //   }
  //   })
  //   }
  console.log(props.songs[props.currentSongIndex].song_src);
  return (
    <div>
      <audio
        src={props.songs[props.currentSongIndex].song_src}
        ref={audioEl}
        // onEnded={() => skipSong(true)}
              // onLoadedData={() => setIsPlaying(true)}
            //   controls
      ></audio>
      <h2>Play Audio</h2>
      <PlayerDetails song={props.songs[props.currentSongIndex]} />
      <PlayerControl
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        skipSong={skipSong}
      />
    </div>
  );
}
