import pkg from 'mongoose';
const { Schema, model } = pkg;

const FreelancerCategoriaSchema = Schema({
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
    },
    categoria: {
        type: Schema.Types.ObjectId,
        ref: 'CategoriaEmpleo',
    },
    estado: {
        type: Boolean,
        default: true,
        required: true
    },
});

FreelancerCategoriaSchema.methods.toJSON = function() {
    const { __v, ...freelancerCategoria } = this.toObject();
    return freelancerCategoria;
}

export default model('FreelancerCategoria', FreelancerCategoriaSchema);