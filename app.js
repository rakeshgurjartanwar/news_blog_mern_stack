require("./config/config");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
const UserRouter = require("./routes/user");
const CategoryRouter = require("./routes/category");
const ViewsRouter = require("./routes/views");
const PostsRouter = require("./routes/post");

dotenv.config();
const app = express();

//////////////////////
// MIDDELWARE
//////////////////////
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
//////////////////////
// APPLICATION ROUTE
//////////////////////
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.use("/api/user", UserRouter);
app.use("/api/category", CategoryRouter);
app.use("/api/views", ViewsRouter);
app.use("/api/posts", PostsRouter);
//////////////////////
// RUN THE SERVER http://localhost:4000/api/user
//////////////////////
const port = process.env.SERVER_PORT || 4000;
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`server running at port http://localhost:${port}`);
});
