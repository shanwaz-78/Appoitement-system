import { Router } from "express";
import controller from "../controllers/index.js";

const router = Router();

router.get("/appointments", controller.appoitementController.getAppointments);
router.post("/save-appointment", controller.appoitementController.saveAppointment);
router.delete("/delete/:id", controller.appoitementController.deleteAppointment);

export default router;
