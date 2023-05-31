import UserService from "../services/userService";

let handleLogin = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  // let result = await CRUDService.handleLogin(param);
  if (!email || !password) {
    return res.status(500).json({
      errCode: 1,
      message: "Missing inputs parameter!",
    });
  }
  let result = await UserService.handleLogin(email, password);

  return res.status(200).json(result);
};

module.exports = {
  handleLogin: handleLogin,
};
