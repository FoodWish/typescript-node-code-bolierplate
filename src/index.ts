import express from "express";
import routes from "./routes";
const app = express();
import sequelize from "./utils/database";

app.use(express.json());
app.use('/v1', routes);

async function startServer() {
  try {
      await sequelize.authenticate();
      console.log("Connected to the database");

      app.listen(3000, () => {
          console.log("Server is running on port 3000");
      });
  } catch (err) {
      console.error('Failed to start server due to database connection error', err);
  }
}

startServer();

