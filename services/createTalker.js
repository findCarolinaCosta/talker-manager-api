const { readFile, writeFile } = require('./fileManipulation');

module.exports = async (req, res, next) => {
  const { name, age, talk } = req.body;
  try {
  const registers = JSON.parse(await readFile());

  const newTalker = {
    id: (registers.length + 1),
    name,
    age,
    talk,
  };
  registers.push(newTalker);

  await writeFile('talker.json', [newTalker]);

  return res.status(201).json(newTalker);
  } catch (e) {
    next(e);
  }
};