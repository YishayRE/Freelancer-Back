import { Proyecto } from "../../models/index.js";

const getProyecto = async(idU, query) => {
    try {
        if (idU === null && query === null)
            return await Proyecto.find();
        else
        if (query === null){
            return await Proyecto.findById(idU);
        }
        else
            return await Proyecto.find({...query });
    } catch (e) {
        throw new Error(e.message);
    }
}

const postProyecto = async(body) => {
    try {
        const proyectorecord = new Proyecto({...body });

        return await proyectorecord.save();
    } catch (e) {
        throw new Error(e.message);
    }
}

const putProyecto = async(id, body) => {
    try {
        return await Proyecto.findByIdAndUpdate(id, {...body }, { new: true });
    } catch (e) {
        throw new Error(e.message);
    }
}

const delProyecto = async(id) => {
    try {
        return await Proyecto.findByIdAndDelete(id);
    } catch (e) {
        throw new Error(e.message);
    }
}

export { getProyecto, postProyecto, putProyecto, delProyecto };