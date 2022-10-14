import { ProyectoCategoria } from "../../models/index.js";

const getProyectoCategoria = async(idU, query) => {
    try {
        if (idU === null && query === null)
            return await ProyectoCategoria.find();
        else
        if (query === null){
            return await ProyectoCategoria.findById(idU);
        }
        else
            return await ProyectoCategoria.find({...query });
    } catch (e) {
        throw new Error(e.message);
    }
}

const postProyectoCategoria = async(body) => {
    try {
        const proyectorecord = new ProyectoCategoria({...body });

        return await proyectorecord.save();
    } catch (e) {
        throw new Error(e.message);
    }
}

const putProyectoCategoria = async(id, body) => {
    try {
        return await ProyectoCategoria.findByIdAndUpdate(id, {...body }, { new: true });
    } catch (e) {
        throw new Error(e.message);
    }
}

const delProyectoCategoria = async(id) => {
    try {
        return await ProyectoCategoria.findByIdAndDelete(id);
    } catch (e) {
        throw new Error(e.message);
    }
}

export { getProyectoCategoria, postProyectoCategoria, putProyectoCategoria, delProyectoCategoria };