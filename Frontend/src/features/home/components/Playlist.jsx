import { useSong } from "../hooks/useSong";
import "./playlist.scss";

const Playlist = () => {
  const { songs, currentSong, loading, playSong } = useSong();

  return (
    <div className="playlist">
      <div className="playlist__header">
        <h2 className="playlist__title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#dd4200">
            <path d="M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5z" />
          </svg>
          Playlist
        </h2>
        {songs && songs.length > 0 && (
          <p className="playlist__subtitle">
            AI suggested these songs for your mood
          </p>
        )}
      </div>

      <div className="playlist__songs">
        {loading && <div className="playlist__loading">Loading songs...</div>}
        {!loading && (!songs || songs.length === 0) && (
          <div className="playlist__empty">
            Detect your mood to see matching songs
          </div>
        )}
        {!loading &&
          songs &&
          songs.map((song) => (
            <div
              key={song._id}
              className={`playlist__song ${currentSong?._id === song._id ? "active" : ""}`}
              onClick={() => playSong(song)}
            >
              <img
                className="playlist__song-poster"
                src={song.posterUrl}
                alt={song.title}
              />
              <div className="playlist__song-info">
                <p className="playlist__song-title">{song.title}</p>
                <span className="playlist__song-mood">{song.mood}</span>
              </div>
              {currentSong?._id === song._id && (
                <div className="playlist__song-playing">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Playlist;
