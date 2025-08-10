const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { PORT } = require("./config.js");

let app = express();

const allowedOrigin = process.env.CORS_ORIGINS || "http://localhost:5173";

app.use(
  cors({
    origin: allowedOrigin,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.static("wwwroot"));
app.use(require("./routes/auth.js"));
app.use(require("./routes/models.js"));
app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}...`);
});
