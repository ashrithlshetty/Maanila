const express = require("express");
const app = express();
const path = require("path");
var bodyParser = require("body-parser");

const { connectMongoDB } = require("./connection");
const mongoURI = "mongodb://127.0.0.1:27017/mydb1";
connectMongoDB(mongoURI);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const homeRoutes = require("./routes/homeRoutes");
app.use("/", homeRoutes);

const peopleRoutes = require("./routes/peopleRoutes");
app.use("/people", peopleRoutes);

const paymentRoutes = require("./routes/paymentRoutes");
app.use("/payment", paymentRoutes);

const budgetRoutes = require("./routes/budgetRoutes");
app.use("/budget", budgetRoutes);

const groupRoutes = require("./routes/groupRoutes");
app.use("/group", groupRoutes);

const transactionRoutes = require("./routes/transactionRoutes");
app.use("/transaction", transactionRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
