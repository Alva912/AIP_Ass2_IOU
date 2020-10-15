const { Genre, Song } = require("../models");

const createGenre = async (req, res) => {
  try {
    const genre = await Genre.create(req.body);
    return res.status(201).json({
      genre,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const getAllGenres = async (req, res) => {
  try {
    const genres = await Genre.findAll({
      include: [
        {
          model: Song,
        },
      ],
    });
    return res.status(200).json({ genres });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const getGenreById = async (req, res) => {
  try {
    const { id } = req.params;
    const genre = await Genre.findOne({
      where: { id: id },
      include: [
        {
          model: Song,
        },
      ],
    });
    if (genre) {
      return res.status(200).json({ genre });
    }
    return res.status(404).send("Genre with the specified ID does not exist");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const updateGenre = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Genre.update(req.body, {
      where: { id: id },
    });
    if (updated) {
      const updatedGenre = await Genre.findOne({ where: { id: id } });
      return res.status(200).json({ Genre: updatedGenre });
    }
    throw new Error("Genre not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const deleteGenre = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Genre.destroy({
      where: { id: id },
    });
    if (deleted) {
      return res.status(204).send("Genre deleted");
    }
    throw new Error("Genre not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createGenre,
  getAllGenres,
  getGenreById,
  updateGenre,
  deleteGenre,
};
