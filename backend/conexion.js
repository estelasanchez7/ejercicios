const mongoose = require ('mongoose')

mongoose.connect('mongodb://Stela:1234@localhost:27017/usuarios_vue', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
})

module.exports = mongoose.connection