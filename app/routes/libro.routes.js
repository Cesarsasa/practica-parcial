module.exports = app => {
    const Libro = require("../controllers/libro.controller.js");
    var router = require("express").Router();
    // Create a new Client
    router.post("/create/", Libro.create);
    // Retrieve all Client
    router.get("/", Libro.findAll);
    // Retrieve all published Client
    router.get("/status", Libro.findAllStatus);
    // Retrieve a single Client with id
    router.get("/:id", Libro.findOne);
    // Update a Client with id
    router.put("/update/:id", Libro.update);
    // Delete a Client with id
    router.delete("/delete/:id", Libro.delete);
    // Delete all Cliente
    router.delete("/delete/", Libro.deleteAll);
    // Podemos utilizar como una ocpion app.use("EndPoint",router" para simplicar el URI
    // Ej.  http://localhost:Puerto/api/cliente/
    app.use("/api/libro", router);
};