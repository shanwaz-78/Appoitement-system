import { Router } from "express";
import controller from "../controllers/index.js";

const router = Router();

router.get("/", controller.appoitementController.getAppointments);
router.post("/", controller.appoitementController.saveAppointment);
router.delete("/:id", controller.appoitementController.deleteAppointment);

export default router;
