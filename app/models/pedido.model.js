//Utilizamos module.export para exportar objetos para que puedan ser utilizados en otras clases
module.exports = (sequelize, Sequelize) => {
// usamos el sequelize.defina para "definir" el nombre de la entity en la BD, en este caso "cliente"
// Usamos type.Sequelize para definir el tipo de datos de cada atributo de la entidad 
    const Pedido = sequelize.define("pedido", {
        id_pedido: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true

        },
        id_cliente: {
           type: Sequelize.INTEGER,
            allowNull: false,
             references: {
            model: 'clientes', // nombre de la tabla a la que referencia
             key: 'id_cliente'  // nombre del campo clave primaria en Cliente
                     },
                onUpdate: 'CASCADE',
             onDelete: 'SET NULL'
        },
        fecha: {
            type: Sequelize.DATE
        },
         total: {
            type: Sequelize.STRING
        }
    });
    return Pedido;
};