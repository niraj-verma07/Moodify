const songModel = require("../models/song.model");
const storageService = require("../services/storage.service");
const id3 = require("node-id3");

async function uploadSongController(req, res) {
  //   console.log(req.file);

  const songBuffer = req.file.buffer;
  const { mood } = req.body;
  const tags = id3.read(songBuffer); // Read ID3 tags from the song buffer
  //   console.log(tags);

  const [songFile, posterFile] = await Promise.all([
    storageService.uploadFile({
      buffer: songBuffer,
      filename: tags.title + ".mp3",
      folder: "/Cohort/Moodify/Songs",
    }),
    storageService.uploadFile({
      buffer: tags.image.imageBuffer,
      filename: tags.title + ".jpeg",
      folder: "/Cohort/Moodify/Posters",
    }),
  ]);

  const song = await songModel.create({
    title: tags.title,
    url: songFile.url,
    posterUrl: posterFile.url,
    mood,
  });

  res.status(201).json({
    message: "Song created successfully",
    song,
  });
}

async function getSongController(req, res) {
  const { mood } = req.query;

  let songs;
  if (mood) {
    songs = await songModel.find({ mood });
  } else {
    songs = await songModel.find();
  }

  res.status(200).json({
    message: "Songs fetched successfully",
    songs,
  });
}
module.exports = {
  uploadSongController,
  getSongController,
};
