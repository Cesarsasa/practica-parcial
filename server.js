// Importamos el modulo express 
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync();
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "UMG Web Application" });
});

//require("./app/routes/tutorial.routes")(app);
require("./app/routes/cliente.routes")(app);
require("./app/routes/pedido.routes")(app);
require("./app/routes/producto.routes")(app);
require("./app/routes/detalle_pedido.routes")(app);
require("./app/routes/dep.routes")(app);
require("./app/routes/empleados.routes")(app);
require("./app/routes/proveedor.routes")(app);
require("./app/routes/libro.routes")(app);
require("./app/routes/estudiante.routes")(app);
require("./app/routes/prestamo.routes")(app);
require("./app/routes/catalogo.routes")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});