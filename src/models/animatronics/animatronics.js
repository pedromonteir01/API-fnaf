export class AnimatronicList {
    constructor() {
        this.list = [];
    }

    addAnimatronic(animatronic) {
        this.list.push(animatronic);
    }

    getAllAnimatronics() {
        return this.list;
    }

    getAnimatronicById(id) {
        return this.list.find((animatronic) => animatronic.id === id);
    }

    editAnimatronic(id, name, description, history, comportament, cursed, image) {
        const animatronic = this.getAnimatronicById(id);
        
        if(animatronic) {
            animatronic.name = name;
            animatronic.description = description;
            animatronic.history = history;
            animatronic.comportament = comportament;
            animatronic.cursed = cursed;
            animatronic.id = id;
            animatronic.image = image;
        }

        return animatronic;
    }

    deleteAnimatronic(id) {
        return this.list = this.list.filter((animatronic) => animatronic.id !== id);
    }
}