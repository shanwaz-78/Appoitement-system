const appointmentReducer = (state = null, action) => {
  switch (action.type) {
    case "FETCH_APPOINTMENTS":
      return action.payload;
    case "SAVE_APPOINTMENT":
      return [
        ...state.filter((app) => app.time !== action.payload.time),
        action.payload,
      ];
    case "CLEAR_APPOINTMENT":
      return state.filter((app) => app.id !== action.payload);
    default:
      return state;
  }
};

export default appointmentReducer;
