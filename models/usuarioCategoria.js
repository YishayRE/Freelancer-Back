import pkg from 'mongoose';
const { Schema, model } = pkg;

const UsuarioCategoriaSchema = Schema({
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
    },
    categoria: {
        type: Schema.Types.ObjectId,
        ref: 'Categoria',
    }
});

UsuarioCategoriaSchema.methods.toJSON = function() {
    const { __v, ...usuarioCategoria } = this.toObject();
    return usuarioCategoria;
}

export default model('UsuarioCategoria', UsuarioCategoriaSchema);