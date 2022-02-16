const getAllTalkers = require('./getAllTalkers');
const getTalkerById = require('./getTalkerById');
const login = require('./login');
const editTalker = require('./editTalker');
const getAuthorization = require('./getAuthorization');
const {
  getValidateName,
  getValidateAge,
  getValidateTalk,
  getValidateRate,
  getWatchedAtFormat,
} = require('./getValidateInfos');
const createTalker = require('./createTalker');
const { getValidateEmail, getValidatePassword } = require('./getValidateLoginInfos');

module.exports = { 
  getAllTalkers,
  getTalkerById,
  login,
  editTalker,
  getAuthorization,
  getValidateName,
  getValidateAge,
  getValidateTalk,
  createTalker,
  getValidateRate,
  getWatchedAtFormat,
  getValidateEmail,
  getValidatePassword,
};