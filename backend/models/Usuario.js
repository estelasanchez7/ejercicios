const mongoose = require("mongoose")
const {Model, Schema} = mongoose

const schemaUsuario = new Schema({
    nombre: {type:String, required:true},
    apellido: {type:String, required:true},
})

class Usuario extends Model{

}


schemaUsuario.loadClass(Usuario)
module.exports=mongoose.model('usuariosyapellidos',schemaUsuario) //usuariosyapellidos se tiene que llamar igual que la colección