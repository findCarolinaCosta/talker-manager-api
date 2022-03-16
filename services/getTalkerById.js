const { readFile } = require('./fileManipulation');

module.exports = async (req, res, next) => {
  try {
    const registers = JSON.parse(await readFile('talker.json'));

    const talker = registers.find(({ id }) => id === Number(req.params.id));

    if (!talker) {
      return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
    }

    return res.status(200).json(talker);
  } catch (e) {
    console.log(e);
    next(e);
  }
};