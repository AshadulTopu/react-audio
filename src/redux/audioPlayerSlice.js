// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//     playlist: [], // Array of audio objects with src, title, artist, etc.
//     currentTrackIndex: 0, // Index of currently playing track
//     isPlaying: false,
//     volume: 0.5, // Volume between 0 and 1
//     isShuffle: false,
//     isModalOpen: false, // Modal visibility
// };

// const audioPlayerSlice = createSlice({
//     name: 'audioPlayer',
//     initialState,
//     reducers: {
//         setPlaylist: (state, action) => {
//             state.playlist = action.payload;
//         },
//         setCurrentTrackIndex: (state, action) => {
//             state.currentTrackIndex = action.payload;
//         },
//         togglePlay: (state) => {
//             state.isPlaying = !state.isPlaying;
//         },
//         setVolume: (state, action) => {
//             state.volume = Math.min(Math.max(action.payload, 0), 1); // Clamp volume
//         },
//         toggleShuffle: (state) => {
//             state.isShuffle = !state.isShuffle;
//         },
//         openModal: (state) => {
//             state.isModalOpen = true;
//         },
//         closeModal: (state) => {
//             state.isModalOpen = false;
//         },
//     },
// });

// export default audioPlayerSlice.reducer;
// export const {
//     setPlaylist,
//     setCurrentTrackIndex,
//     togglePlay,
//     setVolume,
//     toggleShuffle,
//     openModal,
//     closeModal,
// } = audioPlayerSlice.actions;
