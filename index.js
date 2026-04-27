const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4000;

const path = require('path');

// DB connection
require('./connection');

// Middleware
app.use(express.json());

// ✅ CORS FIX (IMPORTANT)
app.use(cors({
  origin: "http://localhost:5173", // 👈 correct origin
  credentials: true
})); 

// Routes
const UserRoutes = require('./Routes/user'); 
const ResumeRoutes = require('./Routes/resume');

app.use('/api/user', UserRoutes);
app.use('/api/resume', ResumeRoutes);



app.use(express.static(path.join(__dirname, "build")));
app.get("/",(req,res)=>{
  res.sendFile(path.join(__dirname, "build", "index.html"));
});



// Test route (optional but useful)
app.get('/', (req, res) => {
  res.send("Backend is working 🚀");
});

// Server start
app.listen(PORT, () => {
  console.log("Backend is running on", PORT);
});