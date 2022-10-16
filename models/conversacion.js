import pkg from 'mongoose';
const { Schema, model } = pkg;

const ConversacionSchema = Schema({
    proyecto: {
        type: Schema.Types.ObjectId,
        ref: 'Proyecto',
        required: true
    },
    freelancer: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    empleador: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    mensaje: {
        type: Array
    },
    estado: {
        type: Boolean,
        default: true,
        required: true
    },
});

ConversacionSchema.methods.toJSON = function() {
    const { __v, ...conversacion } = this.toObject();
    return conversacion;
}

export default model('Conversacion', ConversacionSchema);