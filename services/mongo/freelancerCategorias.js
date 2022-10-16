import { FreelancerCategoria } from "../../models/index.js";

const getFreelancerCategoria = async(idU, query) => {
    try {
        if (idU === null && query === null)
            return await FreelancerCategoria.find();
        else
        if (query === null){
            return await FreelancerCategoria.findById(idU);
        }
        else
            return await FreelancerCategoria.find({...query });
    } catch (e) {
        throw new Error(e.message);
    }
}

const postFreelancerCategoria = async(body) => {
    try {
        const proyectorecord = new FreelancerCategoria({...body });

        return await proyectorecord.save();
    } catch (e) {
        throw new Error(e.message);
    }
}

const putFreelancerCategoria = async(id, body) => {
    try {
        return await FreelancerCategoria.findByIdAndUpdate(id, {...body }, { new: true });
    } catch (e) {
        throw new Error(e.message);
    }
}

const delFreelancerCategoria = async(id) => {
    try {
        return await FreelancerCategoria.findByIdAndDelete(id);
    } catch (e) {
        throw new Error(e.message);
    }
}

export { getFreelancerCategoria, postFreelancerCategoria, putFreelancerCategoria, delFreelancerCategoria };