import pkg from 'mongoose';
const { Schema, model } = pkg;

const UsuarioSchema = Schema({
    email: {
        type: String,
        required: [true, 'El email es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'El password es obligatorio']
    },
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    rol: {
        type: String,
        required: [true, 'El rol es obligatorio'],
        enum: ['FREELANCER', 'EMPLEADOR']
    },
    estado: {
        type: Boolean,
        default: true,
        required: true
    },
});

UsuarioSchema.methods.toJSON = function() {
    const { __v, ...usuario } = this.toObject();
    return usuario;
}

export default model('Usuario', UsuarioSchema);