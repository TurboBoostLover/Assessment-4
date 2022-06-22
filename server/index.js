const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, getStarWars, getMoney, surprise, createUser, changeUser, deleteUsers } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune)
app.get("/api/getStarWars", getStarWars)
app.get("/api/getmoney", getMoney)
app.get("/api/surprise", surprise)
app.post("/api/createUser", createUser)
app.put("/api/changeUser", changeUser)
app.delete("/api/deleteUsers", deleteUsers)

app.listen(4000, () => console.log("Server running on 4000"));
