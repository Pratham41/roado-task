// ROUTER
const router = require("express").Router();
const { searchWord, listWords, addNewWord, detailsOfWord } = require("../controller/words");

router.route("/search").post(searchWord);
router.route("/add").post(addNewWord);
router.route("/:word").post(detailsOfWord);
router.route("/").post(listWords);

module.exports = router;
