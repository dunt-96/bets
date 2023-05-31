import db from "../models/index";
import bcrypt from "bcrypt";

let handleLogin = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {};
      let isExist = await checkEmailUser(email);

      if (isExist) {
        let user = await db.User.findOne({
          where: {
            email: email,
          },
          raw: true,
          attribute: {
            exclude: ["password"],
            include: ["password"],
          },
        });

        if (user) {
          let check = await bcrypt.compareSync(password, user.password);
          if (check) {
            userData.errCode = 0;
            userData.errMessage = "ok";
            delete user.password;
            userData.user = user;
          } else {
            userData.errCode = 3;
            userData.errMessage = "Wrong password";
          }
        } else {
          userData.errCode = 2;
          userData.errMessage = `User's not found`;
        }
      } else {
        userData.errCode = 1;
        userData.errMessage = `Email is not exist`;
      }

      resolve(userData);
    } catch (error) {}
  });
};

let checkEmailUser = (email) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: {
          email: email,
        },
      });

      if (user) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (error) {}
  });
};

let comparePw = (password) => {
  return new Promise(async (resolve, reject) => {});
};

let getAllUser = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("id from get all user");
      let userData = {};

      if (id) {
        console.log("id from get all user id: " + id);
        let user = await db.User.findOne({
          where: {
            id: id,
          },
        });

        if (user) {
          userData.message = "Success";
          userData.statusCode = 200;
          delete user.password;
          userData.user = user;
        } else {
          userData.message = "User is not exist";
          userData.statusCode = 200;
        }
      } else {
        userData.message = "Success";
        userData.statusCode = 200;
        console.log("id from get all user");
        let allUser = await db.User.findAll({
            attributes: {
                exclude: ['password']
            },
        });
        delete allUser.password;
        userData.users = allUser;
      }

      resolve(userData);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  handleLogin: handleLogin,
  getAllUser: getAllUser,
};
