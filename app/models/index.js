// usamos la función requiere para cargar el modulo db.config.js para traer los parametros preconfigurados de la BD
const dbConfig = require("../config/db.config.js");
// cargamos el modulo sequelize "ORM" para el manejo de las entidades como objetos. 
const Sequelize = require("sequelize");
// creamos una variable sequelize y la inicializamos como un Objeto Sequelize con la informacion de la BD 
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

// creamos un objeto db
const db = {};
// la variable db.Sequelize = modulo importado Sequelize que esta declarado previamente donde se importa el modulo
db.Sequelize = Sequelize;
// se define una variable con la configuracion de sequelize
db.sequelize = sequelize;
// se crea una variable clientes que importa el modelo que esta dentro de la carpeta models/cliente.model.js

db.clientes =  require("./cliente.model.js")(sequelize,Sequelize);
db.empleados =  require("./empleado.model.js")(sequelize,Sequelize);
db.deps =  require("./departamento.model.js")(sequelize,Sequelize);
db.proveedors =  require("./proveedor.model.js")(sequelize,Sequelize);
db.pedidos=  require("./pedido.model.js")(sequelize,Sequelize);
db.productos =  require("./producto.model.js")(sequelize,Sequelize);
db.detalle_pedidos =  require("./detalle_pedido.model.js")(sequelize,Sequelize);
db.libros=  require("./libro.model.js")(sequelize,Sequelize);
db.estudiantes =  require("./estudiante.model.js")(sequelize,Sequelize);
db.prestamos =  require("./prestamo.model.js")(sequelize,Sequelize);
db.catalogos =  require("./catalogo.model.js")(sequelize,Sequelize);

//db.clientes =  require("./cliente.model.js")(sequelize,Sequelize);
// puede seguir agregando mas modelos e importarlos de la seguiente manera
//db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
// se utiliza el export para que el objeto db pueda ser accedio a travez de otras clases. 
/*db.clientes.hasMany(db.pedidos, { foreignKey: 'id_cliente' });
// Un pedido pertenece a un cliente
db.pedidos.belongsTo(db.clientes, { foreignKey: 'id_cliente' });*/

db.libros.hasMany(db.prestamos, { foreignKey: 'id_libro' });
// Un pedido pertenece a un cliente
db.prestamos.belongsTo(db.libros, { foreignKey: 'id_libro' });


db.estudiantes.hasMany(db.prestamos, { foreignKey: 'id_estudiante' });
// Un pedido pertenece a un cliente
db.prestamos.belongsTo(db.estudiantes, { foreignKey: 'id_estudiante' });

module.exports = db;