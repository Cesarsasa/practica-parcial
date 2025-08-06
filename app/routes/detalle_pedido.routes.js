module.exports = app => {
    const det_pedido = require("../controllers/detalle_pedido.controller.js");
    var router = require("express").Router();
    // Create a new Client
    router.post("/create/", det_pedido.create);
    // Retrieve all Client
    router.get("/", det_pedido.findAll);
    // Retrieve all published Client
    router.get("/status",det_pedido.findAllStatus);
    // Retrieve a single Client with id
    router.get("/:id", det_pedido.findOne);
    // Update a Client with id
    router.put("/update/:id", det_pedido.update);
    // Delete a Client with id
    router.delete("/delete/:id", det_pedido.delete);
    // Delete all Cliente
    router.delete("/delete/", det_pedido.deleteAll);
    // Podemos utilizar como una ocpion app.use("EndPoint",router" para simplicar el URI
    // Ej.  http://localhost:Puerto/api/cliente/
    app.use("/api/detpedido", router);
};