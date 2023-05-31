import db from "../models/index";
import CRUDService from "../services/CRUDService";

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    return res.render("homepage.ejs", { data: JSON.stringify(data) });
  } catch (error) {}
  return res.send("data");
};
let dunt = async (req, res) => {
  try {
    let data = await db.User.findAll();
  } catch (error) {}
  return res.send("Hello dunt");
};

let getCRUD = (req, res) => {
  res.render("insert_user.ejs");
};

let postCRUD = async (req, res) => {
  let result = await CRUDService.createNewUser(req.body);
  console.log(result);
  return res.send("post crud from server");
};

let displayCRUD = async (req, res) => {
  let users = await CRUDService.getAllUser();

  console.log(users);
  return res.render("displayCRUD.ejs", {
    data: users
  });
}

let editCRUD = async (req, res) => {
  let userId = req.query.id;
  let user = await CRUDService.getUserById(userId);

  return res.render("edit_user.ejs", {user: user});
}

let updateCRUD = async (req, res) => {
  let user = req.body;
  console.log(user);
  let result = await CRUDService.updateCRUD(user);
  return res.send(result);
}

let deleteUserCRUD = async (req, res) => {

  let userId = req.query.id;
  console.log(userId);
  let result = await CRUDService.deleteUserCRUD(userId);
  console.log(result);

  return res.send("delete success");
}



module.exports = {
  getHomePage: getHomePage,
  dunt: dunt,
  getCRUD: getCRUD,
  postCRUD: postCRUD,
  displayCRUD: displayCRUD,
  editCRUD: editCRUD,
  updateCRUD: updateCRUD,
  deleteUserCRUD: deleteUserCRUD,
};
