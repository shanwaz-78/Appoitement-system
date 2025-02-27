import { Schema, model } from "mongoose";

const appointmentSchema = new Schema({
  time: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
});

const appointmentModel = model("Appointment", appointmentSchema);
export default appointmentModel;