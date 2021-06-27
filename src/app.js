const express = require("express");
require("../src/db/conn");

const TeamsRanking = require("../src/models/teams");

//const router = require("./routers/team");
const router = require("../src/routers/team");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log(`connection is live at port number ${port}`);
})