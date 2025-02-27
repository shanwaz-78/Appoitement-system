import services from "../services/index.js";

const getAppointments = (_, res, next) => {
  return services.appointmentService.getAppointments(res, next);
};

const saveAppointment = (req, res, next) => {
  const { time, firstName, lastName, phoneNumber } = req.body;

  if (!time || !firstName || !lastName || !phoneNumber) {
    return res.status(400).json({ error: "All fields are required" });
  }
  return services.appointmentService.saveAppointment(res, next);
};

const deleteAppointment = (req, res, next) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "Appointment ID is required" });
  }
  return services.appointmentService.deleteAppointment(res, next);
};

export default { getAppointments, saveAppointment, deleteAppointment };
