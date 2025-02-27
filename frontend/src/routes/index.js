import { useRoutes } from "react-router-dom";
import { ROUTES } from "../constants/routes.js";
import TimeSlot from "../components/Timeslot.js";
import AppointmentForm from "../components/AppointmentForm.js";

function AppRoutes() {
  return useRoutes([
    {
      path: ROUTES.HOME,
      exact: true,
      element: <TimeSlot />,
    },
    {
      path: ROUTES.APPOITEMENT,
      exact: true,
      element: <AppointmentForm />,
    },
  ]);
}

export default AppRoutes;
