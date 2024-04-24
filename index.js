const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Server updated");
});

// mongoose
//   .connect(
//     "mongodb+srv://jayantakhan06:NodeAPI@8918@backenddb.qidvw3j.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backendDB"
//   )
//   .then(() => {
//     console.log("Connected to database!");
//     app.listen(3000, () => {
//       console.log("Server is running on port 3000");
//     });
//   })
//   .catch((err) => {
//     console.log("Connection failed", err.message);
//   });

mongoose
  .connect(
    "mongodb+srv://jayantakhan06:" +
      encodeURIComponent("NodeAPI@8918") +
      "@backenddb.qidvw3j.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backendDB"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.log("Connection failed", err.message);
  });
