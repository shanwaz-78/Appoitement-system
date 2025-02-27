import "dotenv/config";
import { createServer } from "http";
import app from "./app.js";
import { openDBConnection } from "./config/dbConnection.js";

const PORT = process.env.PORT || 8080;
const MONGO_URI = process.env.MONGO_URI;

const server = createServer(app);

server.listen(PORT, async () => {
  try {
    const {connection} = await openDBConnection(MONGO_URI);
    console.log(`MongoDB connected: ${connection.host}`);
    console.log(`Server is listening on http://localhost:${PORT}`);
  } catch (error) {
    console.error("Failed to start the server due to DB connection error.");
    process.exit(1);
  }
});

server.on("error", (err) => console.error(`Server error: ${err.message}`));
