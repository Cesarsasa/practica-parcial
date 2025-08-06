//Utilizamos module.export para exportar objetos para que puedan ser utilizados en otras clases
module.exports = (sequelize, Sequelize) => {
// usamos el sequelize.defina para "definir" el nombre de la entity en la BD, en este caso "cliente"
// Usamos type.Sequelize para definir el tipo de datos de cada atributo de la entidad 
    const Prestamo = sequelize.define("prestamos", {
           id_prestamo: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true

        },
        id_libro: {
           type: Sequelize.INTEGER,
            allowNull: false,
             references: {
            model: 'libros', // nombre de la tabla a la que referencia
             key: 'id_libro'  // nombre del campo clave primaria en Cliente
                     },
                onUpdate: 'CASCADE',
             onDelete: 'SET NULL'
        },
        id_estudiante: {
           type: Sequelize.INTEGER,
            allowNull: false,
             references: {
            model: 'estudiantes', // nombre de la tabla a la que referencia
             key: 'id_estudiante'  // nombre del campo clave primaria en Cliente
                     },
                onUpdate: 'CASCADE',
             onDelete: 'SET NULL'
        },
        fechap: {
            type: Sequelize.DATE
        },
         fechad: {
            type: Sequelize.DATE
        }
    });
    return Prestamo ;
};