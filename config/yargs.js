const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca commo completado o pendiente la tarea'
}


const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion: {
            descripcion
        }
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion: {
            descripcion
        },
        completado: {
            completado
        }
    })
    .command('borrar', "Borra una tarea de la lista", {
        descripcion: {
            descripcion
        }
    })
    .help()
    .argv;


module.exports = {
    argv
}