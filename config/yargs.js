const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la taarea'

};
const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', descripcion)
    .command('actualizar', 'Actualiza el estado completado de una tarea', descripcion, completado)
    .command('borrar', 'Borrar regitro segun descricion', descripcion)
    .help()
    .argv;

module.exports = {
    argv
}