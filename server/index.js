import "./config/env.js"
import express from "express"
import connectDb from "./config/connectDb.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import authRouter from "./routes/auth.route.js"
import userRouter from "./routes/user.route.js"
import interviewRouter from "./routes/interview.route.js"
import paymentRouter from "./routes/payment.route.js"

const app = express()


const defaultAllowedOrigins = [
  "http://localhost:5173",
  "https://ai-mock-interview-ash.onrender.com",
];

const configuredOrigins = (process.env.CLIENT_URLS || "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

const allowedOrigins = [...new Set([...defaultAllowedOrigins, ...configuredOrigins])];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth" , authRouter)
app.use("/api/user", userRouter)
app.use("/api/interview" , interviewRouter)
app.use("/api/payment" , paymentRouter)

const PORT = process.env.PORT || 6000

const startServer = async () => {
  try {
    await connectDb()
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })
  } catch (error) {
    console.error(`Server failed to start: ${error.message}`)
    process.exitCode = 1
  }
}

void startServer()
