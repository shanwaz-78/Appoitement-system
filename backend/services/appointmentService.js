import Appointment from "../models/Appointment.js";

const getAppointments = async (res, next) => {
  try {
    const appointments = await Appointment.find({});
    if (!appointments || appointments.length === 0) {
      return res.status(404).json({ error: "No appointments found" });
    }
    return res.status(200).json(appointments);
  } catch (error) {
    next(error);
  }
};

const saveAppointment = async (res, next) => {
  try {
    let appointment = await Appointment.findOne({ time });

    if (appointment) {
      appointment.firstName = firstName;
      appointment.lastName = lastName;
      appointment.phoneNumber = phoneNumber;
    } else {
      appointment = new Appointment({
        time,
        firstName,
        lastName,
        phoneNumber,
      });
    }

    await appointment.save();
    res.status(201).json({ message: "Saved Appointement", appointment });
  } catch (error) {
    next(error);
  }
};

const deleteAppointment = async (res, next) => {
  try {
    const deletedAppointment = await Appointment.findByIdAndDelete(id);

    if (!deletedAppointment) {
      return res.status(404).json({ messae: "Appointment not found" });
    }

    res.status(200).json({ message: "Appointment deleted successfully" });
  } catch (error) {
    next(error);
  }
};

export default { getAppointments, saveAppointment, deleteAppointment };
