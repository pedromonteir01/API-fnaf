import { Animatronic } from "../models/animatronics/animatronic.js";
import { AnimatronicList } from "../models/animatronics/animatronics.js";

const animatronicList = new AnimatronicList();

export const getAnimatronics = (req, res) => {
    const animatronics = animatronicList.getAllAnimatronics();
    
    if(animatronics.length) {
        return res.status(200).send({ animatronics });
    }

    return res.status(200).send({
        message: 'No Animatrons Found'
    });
}

export const getAnimatronicById = (req, res) => {
    const { id } = req.param;
    const animatronic = animatronicList.getAnimatronicById(id);
    
    if(!animatronic) return res.status(200).send({
        message: "Animatronic not found"
    });

    return res.send(animatronic);
}

export const postAnimatronic = (req, res) => {
    const { name, description, image, cursed, history, comportament} = req.body;

    if(!name || !description || !image || !cursed || !history || !comportament) {
        return res.status(400).send({
            message: "Incomplete data"
        });
    }

    const animatronic = new Animatronic(name, description, history, comportament, cursed, image);
    
    animatronicList.addAnimatronic(animatronic);

    return res.status(201).send(animatronic);
}

export const putAnimatronic = (req, res) => {
    const { id } = req.param;
    const { name, description, image, cursed, history, comportament} = req.body;

    const animatronic = animatronicList.getAnimatronicById(id);

    if(!name || !description || !image || !cursed || !history || !comportament) {
        return res.status(400).send({
            message: "Incomplete data"
        });
    }

    if(!animatronic) return res.status(200).send({
        message: "Animatronic not found"
    });

    animatronicList.editAnimatronic(id, name, description, history, comportament, cursed, image);

    return res.status(200).send(animatronic);
}

export const deleteAnimatronic = (req, res) => {
    const { id } = req.params;

    const animatronic = animatronicList.getAnimatronicById(id);
    if (!animatronic) return res.status(200).send({
        message: "Animatronic not found"
    });

    animatronicList.deleteAnimatronic(id);

    return res.send(animatronic);
}