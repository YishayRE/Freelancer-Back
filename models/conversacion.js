import pkg from 'mongoose';
const { Schema, model } = pkg;

const ConversacionSchema = Schema({
    proyecto: {
        type: Schema.Types.ObjectId,
        ref: 'Proyecto',
        required: true
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    empleado: {
        type: Schema.Types.ObjectId,
        ref: 'Empleador',
        required: true
    },
    mensaje: {
        type: Array
    },
});

ConversacionSchema.methods.toJSON = function() {
    const { __v, ...conversacion } = this.toObject();
    return conversacion;
}

export default model('Conversacion', ConversacionSchema);