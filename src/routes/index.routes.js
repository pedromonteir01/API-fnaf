import { Router } from "express";
import { animatronicRouter } from "./animatronics.routes.js";

const router = Router();

router.get("/", (req, res) => {
    res.status(200).send({
        message: "SERVIDOR OK"
    });
});

router.use("/animatronics", animatronicRouter);

export { router };