import express from "express";
import cors from "cors";
import authRouter from './routes/auth.js'
import departmentRouter from './routes/department.js'
import employeeRouter from './routes/employee.js'
import connectToDatabase from './db/db.js'
import path from "path";
import { fileURLToPath } from "url";

connectToDatabase()
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());
app.get("/test", (req, res) => {
  res.send("server ok");
});
app.use('/api/auth', authRouter)
app.use('/api/department', departmentRouter)
app.use('/api/employee', employeeRouter)
app.use("/uploads", express.static(path.join(__dirname, "public", "uploads")))

app.get("/test", (req, res) => {
  res.send("SERVER TEST BERHASIL");
});

console.log("INDEX LOADED");
console.log("PORT =", process.env.PORT);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`)
});

