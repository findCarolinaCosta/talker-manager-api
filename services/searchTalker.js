const { readFile } = require('./fileManipulation');

module.exports = async (req, res, next) => {
  try {
    const { q: searthTerm } = req.query;
    const registers = JSON.parse(await readFile());

    const filteredTalker = registers.filter((talker) => {
      const lowerName = talker.name.toLowerCase();
      const lowerSearch = searthTerm.toLowerCase();
      return lowerName.includes(lowerSearch);
    });

    if (!filteredTalker) {
      return res.status(200).json([]);
    }
    return res.status(200).json(filteredTalker);
  } catch (e) {
    console.log(e);
    next(e);
  }
};