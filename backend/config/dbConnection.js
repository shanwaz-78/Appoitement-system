import { connect } from "mongoose";

export async function openDBConnection(MONGO_URI) {
  if (!MONGO_URI) {
    throw new Error("Mongo URI is not provided or invalid.");
  }

  try {
    const connection = await connect(MONGO_URI);
    return connection;
  } catch (error) {
    console.error(`[Error]: Failed to connect to MongoDB - ${error.message}`);
    process.exit(1);
  }
}
