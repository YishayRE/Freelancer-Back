import { Usuario } from "../../models/index.js";

const getUsuario = async(idU, query) => {
    try {
        if (idU === null && query === null)
            return await Usuario.find();
        else
        if (query === null){
            return await Usuario.findById(idU);
        }
        else
            return await Usuario.find({...query });
    } catch (e) {
        throw new Error(e.message);
    }
}

const postUsuario = async(body) => {
    try {
        const proyectorecord = new Usuario({...body });

        return await proyectorecord.save();
    } catch (e) {
        throw new Error(e.message);
    }
}

const putUsuario = async(id, body) => {
    try {
        return await Usuario.findByIdAndUpdate(id, {...body }, { new: true });
    } catch (e) {
        throw new Error(e.message);
    }
}

const delUsuario = async(id) => {
    try {
        return await Usuario.findByIdAndDelete(id);
    } catch (e) {
        throw new Error(e.message);
    }
}

export { getUsuario, postUsuario, putUsuario, delUsuario };