import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routers/userRouter.js";

const app = express();

app.use(cors({ origin: "http://localhost:127.0.0.1:4000", credentials: true }));
app.use(cookieParser());
app.use(express.json());

app.use("/api", userRouter);

export default app;
