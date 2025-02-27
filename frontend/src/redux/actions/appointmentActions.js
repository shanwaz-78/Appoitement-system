import axios from 'axios';

export const fetchAppointments = () => async (dispatch) => {
  const response = await axios.get('/api/appointments');
  dispatch({ type: 'FETCH_APPOINTMENTS', payload: response.data });
};

export const saveAppointment = (appointment) => async (dispatch) => {
  const response = await axios.post('/api/appointments', appointment);
  dispatch({ type: 'SAVE_APPOINTMENT', payload: response.data });
};

export const clearAppointment = (id) => async (dispatch) => {
  await axios.delete(`/api/appointments/${id}`);
  dispatch({ type: 'CLEAR_APPOINTMENT', payload: id });
};