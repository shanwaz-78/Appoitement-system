import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  saveAppointment,
  fetchAppointments,
} from "../redux/actions/appointmentActions.js";

const AppointmentForm = () => {
  const { time } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const appointments = useSelector((state) => state.appointments || []);

  useEffect(() => {
    dispatch(fetchAppointments());
  }, [dispatch]);

  const appointment = appointments.find((app) => app.time === time) || null;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });

  useEffect(() => {
    if (appointment) {
      setFormData({
        firstName: appointment.firstName || "",
        lastName: appointment.lastName || "",
        phoneNumber: appointment.phoneNumber || "",
      });
    }
  }, [appointment?.id, appointment]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveAppointment({ ...formData, time }));
    navigate("/");
  };

  return (
    <div>
      {appointments.length === 0 ? (
        <p>Loading appointments...</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="First Name"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={(e) =>
              setFormData({ ...formData, phoneNumber: e.target.value })
            }
          />
          <button type="submit">Save</button>
          <button type="button" onClick={() => navigate("/")}>
            Cancel
          </button>
        </form>
      )}
    </div>
  );
};

export default AppointmentForm;
