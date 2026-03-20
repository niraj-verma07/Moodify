import axios from "axios";

const api = axios.create({
  baseURL: "https://moodify-dm5d.onrender.com",
  withCredentials: true,
});

export async function getAllSongs() {
  const response = await api.get("/api/songs");
  return response.data;
}

export async function getSongsByMood(mood) {
  const response = await api.get(`/api/songs?mood=${encodeURIComponent(mood)}`);
  return response.data;
}
