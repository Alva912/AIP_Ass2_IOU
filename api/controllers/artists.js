const { Artist, Song } = require("../models");

const createArtist = async (req, res) => {
  try {
    const artist = await Artist.create(req.body);
    return res.status(201).json({
      artist,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const getAllArtists = async (req, res) => {
  try {
    const artists = await Artist.findAll({
      include: [
        {
          model: Song,
        },
      ],
    });
    return res.status(200).json({ artists });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const getArtistById = async (req, res) => {
  try {
    const { id } = req.params;
    const artist = await Artist.findOne({
      where: { id: id },
      include: [
        {
          model: Song,
        },
      ],
    });
    if (artist) {
      return res.status(200).json({ artist });
    }
    return res.status(404).send("Artist with the specified ID does not exist");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const updateArtist = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Artist.update(req.body, {
      where: { id: id },
    });
    if (updated) {
      const updatedArtist = await Artist.findOne({ where: { id: id } });
      return res.status(200).json({ Artist: updatedArtist });
    }
    throw new Error("Artist not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const deleteArtist = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Artist.destroy({
      where: { id: id },
    });
    if (deleted) {
      return res.status(204).send("Artist deleted");
    }
    throw new Error("Artist not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createArtist,
  getAllArtists,
  getArtistById,
  updateArtist,
  deleteArtist,
};
