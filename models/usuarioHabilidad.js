import pkg from 'mongoose';
const { Schema, model } = pkg;

const UsuarioHabilidadSchema = Schema({
    usuarioCategoria: {
        type: Schema.Types.ObjectId,
        ref: 'UsuarioCategoria',
    },
    habilidad: {
        type: String,
        required: [true, 'La habilidad es obligatoria']
    },
    estado: {
        type: Boolean,
        default: true,
        required: true
    },
});

UsuarioHabilidadSchema.methods.toJSON = function() {
    const { __v, ...usuarioHabilidad } = this.toObject();
    return usuarioHabilidad;
}

export default model('UsuarioHabilidad', UsuarioHabilidadSchema);