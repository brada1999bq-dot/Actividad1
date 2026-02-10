const prompt = require('prompt-sync')();

let nombre = prompt(" Ingrese el nombre del usuario ");

let rol = prompt(' Ingrese el rol que quiere asignar');

function asignarRol (rol){
    switch(rol){
        case "Administrador":
            return{
                puedeVerMiembros: true,
                puedeEditarMiembros: true,
                puedeCrearEventos: true,
                puedeGestionarUsuarios: true,
                puedeAsignarVoluntarios: true,
                puedeEvaluarVoluntarios: true,
                puedePostularse: false 
            }
            break;
        case "Colaborador":
            return{
                puedeVerMiembros: true,
                puedeEditarMiembros: true,
                puedeCrearEventos: true,
                puedeGestionarUsuarios: false,
                puedeAsignarVoluntarios: true,
                puedeEvaluarVoluntarios: true,
                puedePostularse: false  
            }
            break;
            case "Voluntario":
            return{
                puedeVerMiembros: true,
                puedeEditarMiembros: false,
                puedeCrearEventos: false,
                puedeGestionarUsuarios: false,
                puedeAsignarVoluntarios: false,
                puedeEvaluarVoluntarios: false,
                puedePostularse: false
            }
            break;    
            case "Congregado":
            return{
                puedeVerMiembros: false,
                puedeEditarMiembros: false,
                puedeCrearEventos: false,
                puedeGestionarUsuarios: false,
                puedeAsignarVoluntarios: false,
                puedeEvaluarVoluntarios: false,
                puedePostularse: true 
            }
            break;
        default:
            return{
                puedeVerMiembros: false,
                puedeEditarMiembros: false,
                puedeCrearEventos: false,
                puedeGestionarUsuarios: false,
                puedeAsignarVoluntarios: false,
                puedeEvaluarVoluntarios: false,
                puedePostularse: false
            };
            break;
    }
}

const Permisos = asignarRol(rol)
console.log(`Asignacion de rol (permisos) completa`)
console.log(`Usuario: ${nombre}`);
console.log(`rol: ${rol}`);
console.log("Permisos")
for (const permiso in Permisos) {
    if (Permisos[permiso] === true) {
        console.log(`- Si ${permiso}`);
    } else {
        console.log(`- No ${permiso}`);
    }
}