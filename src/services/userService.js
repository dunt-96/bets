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
            exclude: ['password'],
            include: ['password'],
          }
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

module.exports = {
  handleLogin: handleLogin,
};
