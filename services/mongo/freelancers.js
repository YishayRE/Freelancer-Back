import { Freelancer } from "../../models/index.js";

const getFreelancer = async(idU, query) => {
    try {
        if (idU === null && query === null)
            return await Freelancer.find();
        else
        if (query === null){
            return await Freelancer.findById(idU);
        }
        else
            return await Freelancer.find({...query });
    } catch (e) {
        throw new Error(e.message);
    }
}

const postFreelancer = async(body) => {
    try {
        const proyectorecord = new Freelancer({...body });

        return await proyectorecord.save();
    } catch (e) {
        throw new Error(e.message);
    }
}

const putFreelancer = async(id, body) => {
    try {
        return await Freelancer.findByIdAndUpdate(id, {...body }, { new: true });
    } catch (e) {
        throw new Error(e.message);
    }
}

const delFreelancer = async(id) => {
    try {
        return await Freelancer.findByIdAndDelete(id);
    } catch (e) {
        throw new Error(e.message);
    }
}

export { getFreelancer, postFreelancer, putFreelancer, delFreelancer };