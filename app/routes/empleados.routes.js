module.exports = app => {
    const empleados = require("../controllers/empleado.controller.js");
    var router = require("express").Router();
    // Create a new Client
    router.post("/create/", empleados.create);
    // Retrieve all Client
    router.get("/", empleados.findAll);
    // Retrieve all published Client
    router.get("/status", empleados.findAllStatus);
    // Retrieve a single Client with id
    router.get("/:id", empleados.findOne);
    // Update a Client with id
    router.put("/update/:id", empleados.update);
    // Delete a Client with id
    router.delete("/delete/:id", empleados.delete);
    // Delete all Cliente
    router.delete("/delete/", empleados.deleteAll);
    // Podemos utilizar como una ocpion app.use("EndPoint",router" para simplicar el URI
    // Ej.  http://localhost:Puerto/api/cliente/
    app.use("/api/empleado", router);
};