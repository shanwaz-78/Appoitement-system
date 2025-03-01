import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchAppointments,
  clearAppointment,
} from "../redux/actions/appointmentActions.js";

const TimeSlot = () => {
  const dispatch = useDispatch();
  const appointments = useSelector((state) => state.appointments);

  useEffect(() => {
    dispatch(fetchAppointments());
  }, [dispatch]);

  const handleClear = (id) => {
    dispatch(clearAppointment(id));
  };

  if (appointments === null) {
    return <p>Loading appointments...</p>;
  }

  return (
    <div className="time-slots">
      {appointments === null ? (
        <p>No appointments available.</p>
      ) : (
        Array.from({ length: 9 }, (_, i) => {
          const time = `${9 + i}:00 AM`;
          const appointment = appointments.find((app) => app.time === time);
          return (
            <div key={time} className={`slot ${appointment ? "booked" : ""}`}>
              <Link to={`/book/${time}`}>{time}</Link>
              {appointment && (
                <button onClick={() => handleClear(appointment.id)}>
                  Clear
                </button>
              )}
            </div>
          );
        })
      )}
    </div>
  );
};

export default TimeSlot;
