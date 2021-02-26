const Usuario = require('../models/Usuario')
let daoUsuarios = {}

//guardar
daoUsuarios.guardar = function guardar(usuario) {
    return new Promise((resolved, reject) => {
        let u = new Usuario(usuario)
        u.save()
            .then(() => {
                resolved("Información guardada con éxito.")
            })
            .catch(err => resolved(err))
    })
}

//listar
    daoUsuarios.listar = function find() {
        return new Promise((resolved, reject) => {
          resolved(Usuario.find().lean());
        });
      };

    //eliminar
    daoUsuarios.eliminar=function eliminar(id){
        console.log("Estoy en dao: ", id)
        Usuario.findOneAndRemove({_id:id}) //este metodo necesita una promesa o callback
        .then(datos=>console.log(datos))
    }

module.exports = daoUsuarios