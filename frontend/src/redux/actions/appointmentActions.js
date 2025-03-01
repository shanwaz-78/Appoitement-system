import axios from "axios";

export const fetchAppointments = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:8181/api/appointments");
    dispatch({ type: "FETCH_APPOINTMENTS", payload: response.data });
  } catch (error) {
    console.error("Error fetching appointments:", error);
  }
};

export const saveAppointment = (appointment) => async (dispatch) => {
  const response = await axios.post(
    "http://localhost:8181/api/save-appointment",
    appointment
  );
  dispatch({ type: "SAVE_APPOINTMENT", payload: response.data });
};

export const clearAppointment = (id) => async (dispatch) => {
  await axios.delete(`http://localhost:8181/api/delete/${id}`);
  dispatch({ type: "CLEAR_APPOINTMENT", payload: id });
};
