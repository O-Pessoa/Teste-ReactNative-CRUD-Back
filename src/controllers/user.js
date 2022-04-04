const { User } = require("../database/models");
const { v4: uuidv4 } = require("uuid");

exports.getAll = async () => {
  try {
    return await User.findAll();
  } catch (error) {
    throw error;
  }
};

exports.add = async (name, birthDate, photo) => {
  try {
    const base64Data = photo.replace(/^data:image\/png;base64,/, "");
    const uid = uuidv4();
    require("fs").writeFile(
      `/tmp/${uid}.png`,
      base64Data,
      "base64",
      function (err) {
        console.log(err);
      }
    );
    const user = await User.create({
      uid,
      name,
      birthDate,
      photo: `/img/${uid}.png`,
    });
    return user;
  } catch (error) {
    throw error;
  }
};
