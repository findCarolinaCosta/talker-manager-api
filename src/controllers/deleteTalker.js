const { readFile, writeFile } = require('../helpers/fileManipulation');

module.exports = async (req, res, next) => {
  const { id } = req.params;

  try {
    const registers = JSON.parse(await readFile());

  const talkerIndex = registers.findIndex(({ id: talkerId }) => talkerId === Number(id));
  
  if (talkerIndex === -1) { return res.status(404).json({ message: 'Talker not found!' }); }
  
  registers.splice(talkerIndex, 1);

  await writeFile('./talker.json', registers);

  res.status(204).end();
  } catch (e) {
    next(e);
  }
};