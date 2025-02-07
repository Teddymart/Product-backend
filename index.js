const express = require("express")
const mongoose = require("mongoose");
// const productRoute = require("./routes/productRoutes.js");
const userRoutes = require("./routes/userRoutes.js");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

app.use(express.json());
dotenv.config();
// routes
// app.use("/api/product", productRoute);
app.use("/api/user", userRoutes);

app.use(cors()); 


app.listen(5004, () =>{
    console.log("server running in port 5004")
      });

     

app.get('/', (req, res) => {
    res.send('Hello my love ify baby')
  })
  
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("mongodb connected")
}).catch(() => {
    console.log(" failed to connect to mongodb ")

})