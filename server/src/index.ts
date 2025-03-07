import express from "express";
import dotenv from "dotenv";
import sequelize from "./databases/db"; 
import Task from "./models/Task";
import Routes from './routes/routes'
import cors from 'cors';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

// Check if the database connection works
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected successfully!");
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
  });

// Explicitly log model syncing
sequelize 
  .sync({ force: true })
  .then(() => {
    console.log("Database synced successfully!");
  })
  .catch((error) => {
    console.error("Error syncing database:", error);
  });

app.use("/api", Routes);

app.get("/", (req, res) => {
  res.send("Task Management API is running...");
});

app.listen(PORT, () => console.log(`Server is running successfully on PORT: ${PORT}`));
