const express = require("express");
const routes = express.Router();

const linkController = require("./controllers/link");
const link = require("./controllers/link");

routes.get("/link", linkController.list);
routes.get("/link/:id", linkController.listOne);
routes.post("/link", linkController.create);
routes.put("/link/:id", linkController.update);
routes.delete("/link/:id", linkController.delete);

module.exports = routes;
