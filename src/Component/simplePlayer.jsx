// import React, { useState } from "react";

// const SimplePlayer = () => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [duration, setDuration] = useState(0);
//   const [isShuffle, setIsShuffle] = useState(false);
//   const [playlist, setPlaylist] = useState([]);
//   const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
//   const [volume, setVolume] = useState(0.5);
//   // const [shuffleIndex, setShuffleIndex] = useState(0);
//   const [mute, setMute] = useState(false);
//   const [isLoop, setIsLoop] = useState(false);

//   const audioRef = React.createRef();
//   // const progressBarRef = React.createRef();

//   // handle toggle play
//   const handleTogglePlay = () => {
//     if (isPlaying) {
//       audioRef.current.pause();
//     } else {
//       audioRef.current.play();
//     }
//     setIsPlaying(!isPlaying);
//   };

//   // handle volume
//   const handleVolumeMute = () => {
//     const audio = audioRef.current;
//     if (audio) {
//       if (audio.muted) {
//         audio.muted = false;
//         setMute(false);
//       } else {
//         audio.muted = true;
//         setMute(true);
//       }
//     }
//   };

//   // handle volume change
//   const handleVolumeChange = (e) => {
//     const audio = audioRef.current;
//     if (audio) {
//       const volumeProgress = parseInt(
//         (window.event.offsetX / e.currentTarget.offsetWidth) * 100
//       );
//       const newVolume = volumeProgress / 100;
//       audio.volume = newVolume;
//       setVolume(newVolume);
//     }
//   };

//   // handle fast forward
//   const handleFastForward = () => {
//     const audio = audioRef.current;
//     if (audio) {
//       audio.currentTime += 10;
//     }
//   };

//   // handle fast rewind
//   const handleFastRewind = () => {
//     const audio = audioRef.current;
//     if (audio) {
//       audio.currentTime -= 10;
//     }
//   };

//   // handle progress bar click
//   const handleSeekToTime = (e) => {
//     const audio = audioRef.current;
//     if (audio) {
//       const timeToSeek = parseInt(
//         (window.event.offsetX / e.currentTarget.offsetWidth) * duration
//       );
//       console.log(timeToSeek);
//       audio.currentTime = timeToSeek;
//     }
//   };

//   // play next track
//   const handlePlayNext = () => {
//     if (currentTrackIndex === playlist.length - 1) {
//       setCurrentTrackIndex(0);
//     } else {
//       setCurrentTrackIndex(currentTrackIndex + 1);
//     }
//   };

//   // play previous track
//   const handlePlayPrevious = () => {
//     if (currentTrackIndex === 0) {
//       setCurrentTrackIndex(playlist.length - 1);
//     } else {
//       setCurrentTrackIndex(currentTrackIndex - 1);
//     }
//   };

//   // // update current track

//   // update playlist
//   const handlePlaylistUpdate = () => {};

//   // update time
//   const updateCurrentTime = () => {
//     setCurrentTime(audioRef.current.currentTime);
//   };

//   //update duration
//   const updateDuration = () => {
//     setDuration(audioRef.current.duration);
//   };

//   // loop logic
//   const handleToggleLoop = () => {
//     setIsLoop(!isLoop);
//     if (isLoop) {
//       audioRef.current.loop = true;
//     }
//   };

//   // // shuffle logic
//   const handleToggleShuffle = () => {
//     setIsShuffle(!isShuffle);
//   };

//   // format time
//   const formatTime = (time) => {
//     const minutes = Math.floor(time / 60);
//     const seconds = Math.floor(time % 60);
//     return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
//       2,
//       "0"
//     )}`;
//   };

//   return (
//     <div>
//       <audio
//         ref={audioRef}
//         src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
//         onTimeUpdate={updateCurrentTime}
//         onEnded={() => setIsPlaying(false)}
//         onDurationChange={updateDuration}
//       />
//       {/* play/pause button */}
//       <button onClick={handleTogglePlay}>{isPlaying ? "Pause" : "Play"}</button>

//       {/* progress bar */}
//       <div
//         style={{
//           width: "100%",
//           cursor: "pointer",
//           position: "relative",
//           maxWidth: "200px",
//           height: "5px",
//           backgroundColor: "Yellow",
//         }}
//         onClick={(e) => handleSeekToTime(e)}
//       >
//         <div
//           className="progress"
//           style={{
//             width: `${(currentTime * 100) / duration}%`,
//             backgroundColor: "Green",
//             height: "5px",
//           }}
//         ></div>
//       </div>
//       {/* current time */}
//       <div>{formatTime(currentTime)}</div>
//       {/* duration time */}
//       <div>{formatTime(duration)}</div>
//       {/* volume slider */}
//       <div
//         style={{
//           width: "100%",
//           cursor: "pointer",
//           position: "relative",
//           maxWidth: "200px",
//           height: "5px",
//           backgroundColor: "black",
//         }}
//         onClick={(e) => handleVolumeChange(e)}
//       >
//         <div
//           className="progress"
//           style={{
//             width: `${volume * 100}%`,
//             backgroundColor: "red",
//             height: "5px",
//           }}
//         ></div>
//       </div>
//       {/* mute button */}
//       <button onClick={handleVolumeMute}>{mute ? "Unmute" : "Mute"}</button>
//       {/* play previous button */}
//       <button onClick={handlePlayPrevious}>Previous</button>
//       {/* play next button */}
//       <button onClick={handlePlayNext}>Next</button>
//       {/* playback speed slider */}
//       {/* shuffle button */}
//       <button onClick={handleToggleShuffle}>
//         {isShuffle ? "Unshuffle" : "Shuffle"}
//       </button>
//       {/* repeat button */}
//       <button onClick={handleToggleLoop}> {isLoop ? "Unloop" : "Loop"} </button>
//       {/* fast rewind */}
//       <button onClick={handleFastRewind}>Fast rewind</button>
//       {/* fast forward */}
//       <button onClick={handleFastForward}>Fast forward</button>
//       {/* modal */}
//     </div>
//   );
// };

// export default SimplePlayer;
