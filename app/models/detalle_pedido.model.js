//Utilizamos module.export para exportar objetos para que puedan ser utilizados en otras clases
module.exports = (sequelize, Sequelize) => {
// usamos el sequelize.defina para "definir" el nombre de la entity en la BD, en este caso "cliente"
// Usamos type.Sequelize para definir el tipo de datos de cada atributo de la entidad 
    const Det_pedido = sequelize.define("det_pedido", {
        id_detalle: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true

        },
        id_pedido: {
           type: Sequelize.INTEGER,
            allowNull: false,
             references: {
            model: 'pedidos', // nombre de la tabla a la que referencia
             key: 'id_pedido'  // nombre del campo clave primaria en Cliente
                     },
                onUpdate: 'CASCADE',
             onDelete: 'SET NULL'
        },
        id_producto: {
           type: Sequelize.INTEGER,
            allowNull: false,
             references: {
            model: 'productos', // nombre de la tabla a la que referencia
             key: 'id_producto'  // nombre del campo clave primaria en Cliente
                     },
                onUpdate: 'CASCADE',
             onDelete: 'SET NULL'
        },
        cantidad: {
            type: Sequelize.INTEGER
        },
         subtotal: {
            type: Sequelize.INTEGER
        }
    });
    return Det_pedido;
};  