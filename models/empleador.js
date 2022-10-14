import pkg from 'mongoose';
const { Schema, model } = pkg;

const EmpleadorSchema = Schema({
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
    rfc: {
        type: String,
        required: [true, 'El RFC es obligatorio'],
        unique: true
    },
    razon_social: {
        type: String,
        required: [true, 'La razón social es obligatoria']
    },
    estado: {
        type: Boolean,
        default: true,
        required: true
    },
});

EmpleadorSchema.methods.toJSON = function() {
    const { __v, ...empleador } = this.toObject();
    return empleador;
}

export default model('Empleador', EmpleadorSchema);