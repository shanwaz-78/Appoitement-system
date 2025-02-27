import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { saveAppointment } from "../redux/actions/appointmentActions";

const AppointmentForm = () => {
  const { time } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const appointments = useSelector((state) => state.appointments);
  const appointment = appointments.find((app) => app.time === time);

  const [formData, setFormData] = useState({
    firstName: appointment ? appointment.firstName : "",
    lastName: appointment ? appointment.lastName : "",
    phoneNumber: appointment ? appointment.phoneNumber : "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveAppointment({ ...formData, time }));
    navigate("/"); // Use navigate instead of history.push
  };

  return (
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
        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
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
  );
};

export default AppointmentForm;
