import express from "express";
import Appointment from "./models/Appointment.js";
import cors from "cors";
import mongoSanitize from "express-mongo-sanitize";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import { errorHandler } from "./middleware/errorMiddlewre.js";
import { notFound } from "./errors/notFound.js";
import routes from "./routes/index.js";

const app = express();

// Security middlewares
const limiter = rateLimit({
  windowMs: 30 * 60 * 1000,
  max: 100,
  standardHeaders: true,
});

app.use(limiter);
app.use(helmet());
app.use(mongoSanitize());
app.use(cors({ origin: "*", methods: ["GET", "POST", "DELETE"] }));
app.use(express.json());

app.use("/api", routes.appoitementRoute);

// Error handling middlewares
app.use(notFound);
app.use(errorHandler);

export default app;
