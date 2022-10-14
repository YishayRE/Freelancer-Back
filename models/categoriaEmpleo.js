import pkg from 'mongoose';
const { Schema, model } = pkg;

const CategoriaEmpleoSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        unique: true
    },
    habilidades: {
        type: Array,
        required: [true, 'Las habilidades son obligatorias']
    }
});

CategoriaEmpleoSchema.methods.toJSON = function() {
    const { __v, ...categoriaEmpleo } = this.toObject();
    return categoriaEmpleo;
}

export default model('CategoriaEmpleo', CategoriaEmpleoSchema);