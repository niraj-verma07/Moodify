import { getAllSongs, getSongsByMood } from "../service/song.api";
import { useContext } from "react";
import { SongContext } from "../song.context";

export const useSong = () => {
  const { loading, setLoading, songs, setSongs, currentSong, setCurrentSong } =
    useContext(SongContext);

  async function handleGetAllSongs() {
    setLoading(true);
    try {
      const data = await getAllSongs();
      setSongs(data.songs || []);
    } catch {
      setSongs([]);
    }
    setLoading(false);
  }

  async function handleGetSongsByMood(mood) {
    setLoading(true);
    try {
      const data = await getSongsByMood(mood);
      setSongs(data.songs || []);
      if (data.songs?.length > 0) {
        setCurrentSong(data.songs[0]);
      }
    } catch {
      setSongs([]);
    }
    setLoading(false);
  }

  function playSong(song) {
    setCurrentSong(song);
  }

  function playNext() {
    if (!songs?.length || !currentSong) return;
    const idx = songs.findIndex((s) => s._id === currentSong._id);
    const next = songs[(idx + 1) % songs.length];
    setCurrentSong(next);
  }

  function playPrev() {
    if (!songs?.length || !currentSong) return;
    const idx = songs.findIndex((s) => s._id === currentSong._id);
    const prev = songs[(idx - 1 + songs.length) % songs.length];
    setCurrentSong(prev);
  }

  return {
    loading,
    songs,
    currentSong,
    handleGetAllSongs,
    handleGetSongsByMood,
    playSong,
    playNext,
    playPrev,
  };
};
