import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import authRoutes from "./routes/auth.js";
dotenv.config();
import offerRoutes from "./routes/offers.js";
const app = express();
import supabaseAuthRoutes from "./routes/supabaseAuth.js";
import aiRoutes from "./routes/ai.js";
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use("/api/supabase-auth", supabaseAuthRoutes);
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "AI Affiliate Empire OS API Running"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});app.use("/api/offers", offerRoutes);
app.use("/api/ai", aiRoutes);
