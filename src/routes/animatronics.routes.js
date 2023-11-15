import { Router } from "express";
import { 
    deleteAnimatronic, 
    getAnimatronicById, 
    getAnimatronics, 
    postAnimatronic, 
    putAnimatronic 
} from "../controllers/animatronic.controller.js";

const animatronicRouter = Router();

animatronicRouter.get("/", getAnimatronics);
animatronicRouter.get("/:id", getAnimatronicById);
animatronicRouter.post("/", postAnimatronic);
animatronicRouter.put("/:id", putAnimatronic);
animatronicRouter.delete("/:id", deleteAnimatronic)

export { animatronicRouter };