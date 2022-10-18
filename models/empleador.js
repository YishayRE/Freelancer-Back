import pkg from 'mongoose';
const { Schema, model } = pkg;

const EmpleadorSchema = Schema({
    rfc: {
        type: String,
        required: [true, 'El RFC es obligatorio'],
        unique: true
    },
    razon_social: {
        type: String,
        required: [true, 'La razón social es obligatoria']
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true,
        unique: true
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