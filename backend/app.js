import express from "express";
import cors from "cors";
import mongoSanitize from "express-mongo-sanitize";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import { errorHandler } from "./middleware/errorMiddlewre.js";
import { notFound } from "./errors/notFound.js";

const app = express();

// security middlewares
app.use(
  rateLimit({
    windowMs: 30 * 60 * 1000,
    max: 100,
    standardHeaders: true,
  })
);
app.use(helmet({ strictTransportSecurity: true, includeSubDomains: true }));
app.use(mongoSanitize());
app.use(
  cors({ origin: "http://localhost:3000/", methods: ["GET", "POST", "DELETE"] })
);
app.use(express.json());

// error handleer middlewre
app.use(notFound);
app.use(errorHandler);

export default app;
