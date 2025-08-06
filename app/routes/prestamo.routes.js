module.exports = app => {
    const prestamo = require("../controllers/prestamo.controller.js");
    var router = require("express").Router();
    // Create a new Client
    router.post("/create/", prestamo.create);
    // Retrieve all Client
    router.get("/", prestamo.findAll);
    // Retrieve all published Client
    router.get("/status", prestamo.findAllStatus);
    // Retrieve a single Client with id
    router.get("/:id", prestamo.findOne);
    // Update a Client with id
    router.put("/update/:id", prestamo.update);
    // Delete a Client with id
    router.delete("/delete/:id", prestamo.delete);
    // Delete all Cliente
    router.delete("/delete/", prestamo.deleteAll);
    // Podemos utilizar como una ocpion app.use("EndPoint",router" para simplicar el URI
    // Ej.  http://localhost:Puerto/api/cliente/
    app.use("/api/prestamo", router);
};