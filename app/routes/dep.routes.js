module.exports = app => {
    const dep = require("../controllers/departamento.controller.js");
    var router = require("express").Router();
    // Create a new Client
    router.post("/create/", dep.create);
    // Retrieve all Client
    router.get("/", dep.findAll);
    // Retrieve all published Client
    router.get("/status", dep.findAllStatus);
    // Retrieve a single Client with id
    router.get("/:id", dep.findOne);
    // Update a Client with id
    router.put("/update/:id", dep.update);
    // Delete a Client with id
    router.delete("/delete/:id", dep.delete);
    // Delete all Cliente
    router.delete("/delete/", dep.deleteAll);
    // Podemos utilizar como una ocpion app.use("EndPoint",router" para simplicar el URI
    // Ej.  http://localhost:Puerto/api/cliente/
    app.use("/api/dep", router);
};