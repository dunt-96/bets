import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./src/config/viewEngine";
import initWebRoute from "./src/route/web"
require('dotenv').config();

let app = express();
//config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

viewEngine(app);
initWebRoute(app);

let port = process.env.PORT || 6969
//Port === undefined => port = 6969
app.listen(port, () => {
    console.log("Backend nodejs is running on the port: " + port);
});