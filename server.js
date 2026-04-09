const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

let diaries = [];

app.get("/", (req, res) => {
  res.send("Diary API is running...");
});

app.get("/api/diaries", (req, res) => {
  res.json(diaries);
});

app.post("/api/diaries", (req, res) => {
  const newDiary = { id: Date.now(), ...req.body };
  diaries.push(newDiary);
  res.status(201).json(newDiary);
});

app.put("/api/diaries/:id", (req, res) => {
  const id = Number(req.params.id);
  diaries = diaries.map(d => d.id === id ? { ...d, ...req.body } : d);
  res.json({ message: "Updated" });
});

app.delete("/api/diaries/:id", (req, res) => {
  const id = Number(req.params.id);
  diaries = diaries.filter(d => d.id !== id);
  res.json({ message: "Deleted" });
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
