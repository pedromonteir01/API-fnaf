import { v4 as uuidv4 } from "uuid";

export class Animatronic {
    constructor(name, description, history, comportament, cursed, image) {
        this.name = name;
        this.description = description;
        this.history = history;
        this.comportament = comportament;
        this.cursed = cursed;
        this.image = image;
        this.id = this.generateId();
    }

    generateId() {
        return uuidv4()
    }
}