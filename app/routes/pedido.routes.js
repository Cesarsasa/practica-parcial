module.exports = app => {
    const pedidos = require("../controllers/pedido.controller.js");
    var router = require("express").Router();
    // Create a new Client
    router.post("/create/", pedidos.create);
    // Retrieve all Client
    router.get("/", pedidos.findAll);
    // Retrieve all published Client
    router.get("/status",pedidos.findAllStatus);
    // Retrieve a single Client with id
    router.get("/:id", pedidos.findOne);
    // Update a Client with id
    router.put("/update/:id", pedidos.update);
    // Delete a Client with id
    router.delete("/delete/:id", pedidos.delete);
    // Delete all Cliente
    router.delete("/delete/", pedidos.deleteAll);
    // Podemos utilizar como una ocpion app.use("EndPoint",router" para simplicar el URI
    // Ej.  http://localhost:Puerto/api/cliente/
    app.use("/api/pedido", router);
};