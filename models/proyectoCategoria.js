import pkg from 'mongoose';
const { Schema, model } = pkg;

const ProyectoCategoriaSchema = Schema({
    proyecto: {
        type: Schema.Types.ObjectId,
        ref: 'Proyecto',
    },
    categoria: {
        type: Schema.Types.ObjectId,
        ref: 'Categoria',
    }
});

ProyectoCategoriaSchema.methods.toJSON = function() {
    const { __v, ...proyectoCategoria } = this.toObject();
    return proyectoCategoria;
}

export default model('ProyectoCategoria', ProyectoCategoriaSchema);