import { Conversacion } from "../../models/index.js";

const getConversacion = async(idU, query) => {
    try {
        if (idU === null && query === null)
            return await Conversacion.find();
        else
        if (query === null){
            return await Conversacion.findById(idU);
        }
        else
            return await Conversacion.find({...query });
    } catch (e) {
        throw new Error(e.message);
    }
}

const postConversacion = async(body) => {
    try {
        const proyectorecord = new Conversacion({...body });

        return await proyectorecord.save();
    } catch (e) {
        throw new Error(e.message);
    }
}

const putConversacion = async(id, body) => {
    try {
        return await Conversacion.findByIdAndUpdate(id, {...body }, { new: true });
    } catch (e) {
        throw new Error(e.message);
    }
}

const delConversacion = async(id) => {
    try {
        return await Conversacion.findByIdAndDelete(id);
    } catch (e) {
        throw new Error(e.message);
    }
}

export { getConversacion, postConversacion, putConversacion, delConversacion };