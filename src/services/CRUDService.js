import bcrypt from "bcrypt";
import db from "../models/index";

let createNewUser = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPW = await hashUserPassword(data.password);
      await db.User.create({
        email: data.email,
        password: hashPW,
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        gender: data.gender === "1" ? true : false,
        roleId: data.roleId,
        phoneNumber: data.phoneNumber,
      });

      resolve("Successful");
    } catch (error) {
      reject(error);
    }
  });
};

let hashUserPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    const saltRounds = 10;

    try {
      const salt = await bcrypt.genSaltSync(saltRounds);
      const hash = await bcrypt.hashSync(password, salt);

      resolve(hash);
    } catch (error) {
      reject(error);
    }
  });
};

let getAllUser = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = db.User.findAll({
        raw: true,
      });
      resolve(user);
    } catch (error) {
      reject(error);
    }
  });
};

let getUserById = async (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({ where: { id: userId }, raw: true });
      if (user) {
        resolve(user);
      } else {
        reject([]);
      }
    } catch (error) {}
  });
};

let updateCRUD = async (data) => {
  return new Promise((resolve, reject) => {
    console.log(data);
    resolve();
  });
};

module.exports = {
  createNewUser: createNewUser,
  getAllUser: getAllUser,
  getUserById: getUserById,
  updateCRUD: updateCRUD,
};
