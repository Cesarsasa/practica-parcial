module.exports = app => {
    const catalogo = require("../controllers/catalogo.controller.js");
    var router = require("express").Router();
    // Create a new Client
    router.post("/create/", catalogo.create);
    // Retrieve all Client
    router.get("/", catalogo.findAll);
    // Retrieve all published Client
    router.get("/status", catalogo.findAllStatus);
    // Retrieve a single Client with id
    router.get("/:nombre", catalogo.findOne);
    // Update a Client with id
    router.put("/update/:id", catalogo.update);
    // Delete a Client with id
    router.delete("/delete/:id", catalogo.delete);
    // Delete all Cliente
    router.delete("/delete/",catalogo.deleteAll);
    // Podemos utilizar como una ocpion app.use("EndPoint",router" para simplicar el URI
    // Ej.  http://localhost:Puerto/api/cliente/
    app.use("/api/catalogo", router);
};