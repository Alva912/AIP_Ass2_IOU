const { Song } = require("../models");

const createSong = async (req, res) => {
  try {
    const song = await Song.create(req.body);
    return res.status(201).json({
      song,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const getAllSongs = async (req, res) => {
  try {
    const songs = await Song.findAll();
    return res.status(200).json({ songs });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const getSongById = async (req, res) => {
  try {
    const { id } = req.params;
    const song = await Song.findOne({
      where: { id: id },
    });
    if (song) {
      return res.status(200).json({ song });
    }
    return res.status(404).send("Song with the specified ID does not exist");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const updateSong = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Song.update(req.body, {
      where: { id: id },
    });
    if (updated) {
      const updatedSong = await Song.findOne({ where: { id: id } });
      return res.status(200).json({ Song: updatedSong });
    }
    throw new Error("Song not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const deleteSong = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Song.destroy({
      where: { id: id },
    });
    if (deleted) {
      return res.status(204).send("Song deleted");
    }
    throw new Error("Song not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createSong,
  getAllSongs,
  getSongById,
  updateSong,
  deleteSong,
};
