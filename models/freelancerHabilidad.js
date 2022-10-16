import pkg from 'mongoose';
const { Schema, model } = pkg;

const FreelancerHabilidadSchema = Schema({
    freelancerCategoria: {
        type: Schema.Types.ObjectId,
        ref: 'FreelancerCategoria',
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

FreelancerHabilidadSchema.methods.toJSON = function() {
    const { __v, ...freelancerHabilidad } = this.toObject();
    return freelancerHabilidad;
}

export default model('FreelancerHabilidad', FreelancerHabilidadSchema);