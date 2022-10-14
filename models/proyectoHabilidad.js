import pkg from 'mongoose';
const { Schema, model } = pkg;

const ProyectoHabilidadSchema = Schema({
    proyectoCategoria: {
        type: Schema.Types.ObjectId,
        ref: 'ProyectoCategoria',
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

ProyectoHabilidadSchema.methods.toJSON = function() {
    const { __v, ...proyectoHabilidad } = this.toObject();
    return proyectoHabilidad;
}

export default model('ProyectoHabilidad', ProyectoHabilidadSchema);