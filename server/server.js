import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import connectDB from "./config/db.js";
import { users, posts } from "./data/index.js";
import User from "./models/User.js";
import Post from "./models/Post.js";
connectDB();

import userRoutes from "./routes/user.js";
import postRoutes from "./routes/posts.js";
/* CONFIGURATIONS */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/posts", postRoutes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 6001;

app.listen(PORT, async () => {
  /* ADD DATA ONE TIME */
  try {
    // await User.insertMany(users, { timeout: 15000 });
    // await Post.insertMany(posts, { timeout: 15000 });
    console.log(`Server is running on port ${PORT}`);
  } catch (error) {
    console.log(error.message);
  }
});
