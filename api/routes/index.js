const { Router } = require("express");
const artists = require("../controllers/artists");
const genres = require("../controllers/genres");
const songs = require("../controllers/songs");
const router = Router();

router.get("/", (req, res) => res.send("Server running!"));

router.get("/artists", artists.getAllArtists);
router.get("/artists/:id", artists.getArtistById);
router.patch("/artists/:id", artists.updateArtist);
router.delete("/artists/:id", artists.deleteArtist);
router.post("/artists", artists.createArtist);

router.get("/genres", genres.getAllGenres);
router.get("/genres/:id", genres.getGenreById);
router.patch("/genres/:id", genres.updateGenre);
router.delete("/genres/:id", genres.deleteGenre);
router.post("/genres", genres.createGenre);

router.get("/songs", songs.getAllSongs);
router.get("/songs/:id", songs.getSongById);
router.patch("/songs/:id", songs.updateSong);
router.delete("/songs/:id", songs.deleteSong);
router.post("/songs", songs.createSong);

module.exports = router;
