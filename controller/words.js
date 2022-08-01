const Word = require("../model/Words");
const getDataFromOxfort = require("../utils/hitOxfordAPI");

exports.searchWord = async (req, res) => {
  const { word } = req.body;
  try {
    const wordFromDB = await Word.find({ id : new RegExp(`^${word}`, 'i') });
    if (wordFromDB) {
      console.log("getting from local mongoDB as a cache");
      return res.status(200).json(wordFromDB);
      } 
      // else {
      //   const result = await getDataFromOxfort(word);
      //   if (result) {
      //     console.log("getting from oxfordAPI");
      //     const savedData = await Word.create(result.results);
      //     if (savedData) {
      //       console.log("storing in mongoDB as a cache");
      //       return res.status(200).json(savedData);
      //     }
      //   }
      // }
  } catch (err) {
    console.log(err);
    return res.status(500).json("something went wrong");
  }
};

exports.listWords = async (req, res) => {
  try {
    const allWords = await Word.find({}).sort({ _id: -1 });
    if (allWords) {
      console.log("getting all word list from local mongoDB as a cache");
      return res.status(200).json(allWords);
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json("something went wrong");
  }
};

exports.detailsOfWord = async (req, res) => {
  const { word } = req.params;
  try {
    const details = await Word.findOne({ id: word });
    if (details) {
      console.log("getting details from local mongoDB as a cache");
      return res.status(200).json(details);
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json("something went wrong");
  }
};

exports.addNewWord = async (req, res) => {
  const { word } = req.body;

  try {
    const allReadyPresent = await Word.findOne({ id: word });
    if (allReadyPresent) {
      console.log("word already present in local mongoDB as a cache");
      return res.status(400).json("word already present !");
    } else {
      console.log('word is not present in db !');
      const result = await getDataFromOxfort(word);
      if (result) {
        const newWord = await Word.create(result.results);
        if (newWord) {
          return res.status(201).json(newWord);
        }
      }
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json("something went wrong");
  }
};
