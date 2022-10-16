import { FreelancerHabilidad } from "../../models/index.js";

const getFreelancerHabilidad = async(idU, query) => {
    try {
        if (idU === null && query === null)
            return await FreelancerHabilidad.find();
        else
        if (query === null){
            return await FreelancerHabilidad.findById(idU);
        }
        else
            return await FreelancerHabilidad.find({...query });
    } catch (e) {
        throw new Error(e.message);
    }
}

const postFreelancerHabilidad = async(body) => {
    try {
        const proyectorecord = new FreelancerHabilidad({...body });

        return await proyectorecord.save();
    } catch (e) {
        throw new Error(e.message);
    }
}

const putFreelancerHabilidad = async(id, body) => {
    try {
        return await FreelancerHabilidad.findByIdAndUpdate(id, {...body }, { new: true });
    } catch (e) {
        throw new Error(e.message);
    }
}

const delFreelancerHabilidad = async(id) => {
    try {
        return await FreelancerHabilidad.findByIdAndDelete(id);
    } catch (e) {
        throw new Error(e.message);
    }
}

export { getFreelancerHabilidad, postFreelancerHabilidad, putFreelancerHabilidad, delFreelancerHabilidad };