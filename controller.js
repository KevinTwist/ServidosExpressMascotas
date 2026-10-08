const { mascotas } = require('./recursos/mascotas.js');
const color = require('colors');
function separador() {
    console.log('----------------------------------------------------------------------'.bgMagenta)
}
const mostrarEstadoPerros = () => {
    return new Promise((response, reject) => {
        setTimeout(() => {
            let perrosDisponibles = mascotas.perros.filter(perro => perro.disponible == true)
            let data = {
                ok: true,
                message: '',
                body: null
            }

            if (!perrosDisponibles) {
                data.body = perrosDisponibles;
                response(data);
            } else {
                data.ok = false;
                data.message = 'No hay perros disponibles',
                    reject(data)
            }

        }, 2000);
    });
}
const mostrarEstadoGatos = () => {
    return new Promise((response, reject) => {
        setTimeout(() => {
            let gatosDisponibles = mascotas.gatos.filter(gato => gato.disponible);
            let data = {
                ok: true,
                message: '',
                body: null
            }
            if (gatosDisponibles.length >= 0) {
                data.body = gatosDisponibles;
                response(data);
            } else {
                data.ok = false;
                data.message = 'No hay gatos disponibles',
                    reject(data);
            }

        }, 2000);
    })
}

const agregarMascota = (nuevoPerro) => {
    let nuevaMascota = {
        id: 5,
        disponible: true,
        tamanio: 'Grande',
        nombre: nuevoPerro,
        especialidad: 'Inteligencia'
    };
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (nuevoPerro) {
                mascotas.perros.push(nuevaMascota);
                console.table(mascotas.perros)
                resolve(`La mascota ${nuevoPerro.nombre} se agregó correctamente.`.bgRed);
            } else {
                reject(`Error, no se puede agregar nueva mascota`);
            }
        }, 2000);
    });
}
separador();
console.table(mascotas.gatos)
separador();
console.table(mascotas.perros)
separador();
module.exports = { mostrarEstadoPerros, mostrarEstadoGatos, agregarMascota };

// const f = (!gatosDisponibles);
// console.log(f)

