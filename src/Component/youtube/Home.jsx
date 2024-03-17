import { useState } from "react";
import Player from "./Player";
import { useEffect } from "react";

import audio1 from "../../assets/audio/a-long-way-166385.mp3";
import audio2 from "../../assets/audio/baby-mandala-169039.mp3";
import audio3 from "../../assets/audio/midnight-forest-184304.mp3";

export default function Home() {
  const songs = [
    {
      name: "Demo song Name 1",
      artist: " Demo Artist 1",
      // song_src: "../../assets/audio/a-long-way-166385.mp3",
      song_src: audio1,
    },
    {
      name: "Demo song Name 2",
      artist: " Demo Artist 2",
      // song_src: "../../assets/audio/baby-mandala-169039.mp3",
      song_src: audio2,
    },
    {
      name: "Demo song Name 3",
      artist: " Demo Artist 3",
      // song_src: "../../assets/audio/midnight-forest-184304.mp3",
      song_src: audio3,
    },
  ];
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);
  return (
    <div>
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}
