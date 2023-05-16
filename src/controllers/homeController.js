
let getHomePage = (req, res) => {
    return res.render("homepage.ejs");
}
let dunt = (req, res) => {
    return res.send("Hello dunt");
}

module.exports = {
    getHomePage: getHomePage,
    dunt:dunt,
}
