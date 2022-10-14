import { UsuarioHabilidad } from "../../models/index.js";

const getUsuarioHabilidad = async(idU, query) => {
    try {
        if (idU === null && query === null)
            return await UsuarioHabilidad.find();
        else
        if (query === null){
            return await UsuarioHabilidad.findById(idU);
        }
        else
            return await UsuarioHabilidad.find({...query });
    } catch (e) {
        throw new Error(e.message);
    }
}

const postUsuarioHabilidad = async(body) => {
    try {
        const proyectorecord = new UsuarioHabilidad({...body });

        return await proyectorecord.save();
    } catch (e) {
        throw new Error(e.message);
    }
}

const putUsuarioHabilidad = async(id, body) => {
    try {
        return await UsuarioHabilidad.findByIdAndUpdate(id, {...body }, { new: true });
    } catch (e) {
        throw new Error(e.message);
    }
}

const delUsuarioHabilidad = async(id) => {
    try {
        return await UsuarioHabilidad.findByIdAndDelete(id);
    } catch (e) {
        throw new Error(e.message);
    }
}

export { getUsuarioHabilidad, postUsuarioHabilidad, putUsuarioHabilidad, delUsuarioHabilidad };