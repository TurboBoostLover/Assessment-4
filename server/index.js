const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')
const { getFortune } = require('./controller')
const { getStarWars } = require ('./controller')
const {deleteFortune} = require ('./controller')
const {newFortune} = require('./controller')
const {getMoney} = require('./controller')
const {suprise} = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune)
app.get("/api/getStarWars", getStarWars)
app.delete("/api/fortune", deleteFortune)
app.post("/api/fortune", newFortune)
app.get("/api/getmoney", getMoney)
app.get("/api/suprise", suprise)

app.listen(4000, () => console.log("Server running on 4000"));
