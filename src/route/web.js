import express from "express"
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/insert_user', homeController.getCRUD);
    router.post('/post-crud', homeController.postCRUD);
    router.get('/get-crud', homeController.displayCRUD);
    router.get('/edit-crud', homeController.editCRUD);
    router.post('/put-crud', homeController.updateCRUD);
    router.get('/delete-crud', homeController.deleteUserCRUD);

    router.post('/api/login', userController.handleLogin);
    router.post('/api/get-all-users', userController.getAllUser);

    return app.use("/", router);
}

module.exports = initWebRoutes;
