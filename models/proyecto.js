import pkg from 'mongoose';
const { Schema, model } = pkg;

const ProyectoSchema = Schema({
    proyecto: {
        type: Schema.Types.ObjectId,
        ref: 'Empleador',
    },
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    descripcion: {
        type: String,
        required: [true, 'La descripcion es obligatorio']
    },
    duracion: {
        type: String,
        required: [true, 'La duracion es obligatorio']
    },
    inicio: {
        type: String,
        required: [true, 'La fecha de inicio es obligatorio']
    },
    vacantes: {
        type: String,
        required: [true, 'Las vacantes son obligatorias']
    },
});

ProyectoSchema.methods.toJSON = function() {
    const { __v, ...proyecto } = this.toObject();
    return proyecto;
}

export default model('Proyecto', ProyectoSchema);