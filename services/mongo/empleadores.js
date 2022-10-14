import { Empleador } from "../../models/index.js";

const getEmpleador = async(idU, query) => {
    try {
        if (idU === null && query === null)
            return await Empleador.find();
        else
        if (query === null){
            return await Empleador.findById(idU);
        }
        else
            return await Empleador.find({...query });
    } catch (e) {
        throw new Error(e.message);
    }
}

const postEmpleador = async(body) => {
    try {
        const proyectorecord = new Empleador({...body });

        return await proyectorecord.save();
    } catch (e) {
        throw new Error(e.message);
    }
}

const putEmpleador = async(id, body) => {
    try {
        return await Empleador.findByIdAndUpdate(id, {...body }, { new: true });
    } catch (e) {
        throw new Error(e.message);
    }
}

const delEmpleador = async(id) => {
    try {
        return await Empleador.findByIdAndDelete(id);
    } catch (e) {
        throw new Error(e.message);
    }
}

export { getEmpleador, postEmpleador, putEmpleador, delEmpleador };