import db from '../models/index'

let getHomePage = async (req, res) => {
       try {
        let data = await db.User.findAll();
        return res.render("homepage.ejs", {data: JSON.stringify(data)});
    } catch (error) {
        
    }

    return res.send('data');
    // return res.send("Hello dunt");
    // return res.render("homepage.ejs");
}
let dunt = async (req, res) => {
    try {
        let data = await db.User.findAll();
    } catch (error) {
        
    }
    return res.send("Hello dunt");
}

module.exports = {
    getHomePage: getHomePage,
    dunt:dunt,
}
