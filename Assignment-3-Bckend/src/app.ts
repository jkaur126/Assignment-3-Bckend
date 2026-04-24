import express from "express";
import eventRoutes from "./api/v1/routes/eventRoutes";

const app = express();

app.use(express.json());

app.get("/health", (_req, res) => {
  res.status(200).json({ message: "API is running" });
});

app.use("/api/v1/events", eventRoutes);

export default app;