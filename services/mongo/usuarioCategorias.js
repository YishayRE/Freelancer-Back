import { UsuarioCategoria } from "../../models/index.js";

const getUsuarioCategoria = async(idU, query) => {
    try {
        if (idU === null && query === null)
            return await UsuarioCategoria.find();
        else
        if (query === null){
            return await UsuarioCategoria.findById(idU);
        }
        else
            return await UsuarioCategoria.find({...query });
    } catch (e) {
        throw new Error(e.message);
    }
}

const postUsuarioCategoria = async(body) => {
    try {
        const proyectorecord = new UsuarioCategoria({...body });

        return await proyectorecord.save();
    } catch (e) {
        throw new Error(e.message);
    }
}

const putUsuarioCategoria = async(id, body) => {
    try {
        return await UsuarioCategoria.findByIdAndUpdate(id, {...body }, { new: true });
    } catch (e) {
        throw new Error(e.message);
    }
}

const delUsuarioCategoria = async(id) => {
    try {
        return await UsuarioCategoria.findByIdAndDelete(id);
    } catch (e) {
        throw new Error(e.message);
    }
}

export { getUsuarioCategoria, postUsuarioCategoria, putUsuarioCategoria, delUsuarioCategoria };