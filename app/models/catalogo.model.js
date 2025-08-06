//Utilizamos module.export para exportar objetos para que puedan ser utilizados en otras clases
module.exports = (sequelize, Sequelize) => {
// usamos el sequelize.defina para "definir" el nombre de la entity en la BD, en este caso "cliente"
// Usamos type.Sequelize para definir el tipo de datos de cada atributo de la entidad 
    const Catalogo = sequelize.define("catalogo", {
    
        nombre: {
            type: Sequelize.STRING
        },
        sinopsis: {
            type: Sequelize.STRING
        },
        actores: {
            type: Sequelize.STRING
        },
        duracion: {
            type: Sequelize.STRING
        },
        tipo: {
            type: Sequelize.STRING
        },
        categoria: {
            type: Sequelize.STRING
        },
        ano: {
            type: Sequelize.STRING
        }
    });
    return Catalogo;
};