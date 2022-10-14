import { ProyectoHabilidad } from "../../models/index.js";

const getProyectoHabilidad = async(idU, query) => {
    try {
        if (idU === null && query === null)
            return await ProyectoHabilidad.find();
        else
        if (query === null){
            return await ProyectoHabilidad.findById(idU);
        }
        else
            return await ProyectoHabilidad.find({...query });
    } catch (e) {
        throw new Error(e.message);
    }
}

const postProyectoHabilidad = async(body) => {
    try {
        const proyectorecord = new ProyectoHabilidad({...body });

        return await proyectorecord.save();
    } catch (e) {
        throw new Error(e.message);
    }
}

const putProyectoHabilidad = async(id, body) => {
    try {
        return await ProyectoHabilidad.findByIdAndUpdate(id, {...body }, { new: true });
    } catch (e) {
        throw new Error(e.message);
    }
}

const delProyectoHabilidad = async(id) => {
    try {
        return await ProyectoHabilidad.findByIdAndDelete(id);
    } catch (e) {
        throw new Error(e.message);
    }
}

export { getProyectoHabilidad, postProyectoHabilidad, putProyectoHabilidad, delProyectoHabilidad };