import pkg from 'mongoose';
const { Schema, model } = pkg;

const FreelancerSchema = Schema({
    apellidoP: {
        type: String,
        required: [true, 'El apellido paterno es obligatorio']
    },
    apellidoM: {
        type: String,
        required: [true, 'El apellido materno es obligatorio']
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

FreelancerSchema.methods.toJSON = function() {
    const { __v, ...freelancer } = this.toObject();
    return freelancer;
}

export default model('Freelancer', FreelancerSchema);