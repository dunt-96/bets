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
  res.render("crud.ejs");
};

let postCRUD = async (req, res) => {
  let result = await CRUDService.createNewUser(req.body);
  console.log(result);
  return res.send("post crud from server");
};

module.exports = {
  getHomePage: getHomePage,
  dunt: dunt,
  getCRUD: getCRUD,
  postCRUD: postCRUD,
};
