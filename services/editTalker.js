const { readFile, writeFile } = require('./fileManipulation');

module.exports = async (req, res, next) => {
  const { name, age, talk } = req.body;
  const { id } = req.params;
  try {
  const registers = JSON.parse(await readFile());

  const talkerIndex = registers.findIndex(({ id: talkerId }) => talkerId === Number(id));
  
  registers[talkerIndex] = { ...registers[talkerIndex], name, age, talk };
  
  await writeFile('./talker.json', registers);
  
  return res.status(200).json(registers[talkerIndex]);
  } catch (e) {
    next(e);
  }
};