import express from "express";
import dotenv from "dotenv";
import { notFound } from "./src/middlewares/notFound.js";
import { handleError } from "./src/middlewares/handleError.js";
import notesRoute from "./src/resources/notes/notes.routes.js";
import cors from "cors";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const corsOptions = {
  origin: "http://localhost:5173", // for vite application
  optionsSuccessStatus: 200,
};

//middleware
app.use(cors(corsOptions));
app.use(express.json());

// api routes
app.use("/notes", notesRoute);

app.use(notFound);
app.use(handleError);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});