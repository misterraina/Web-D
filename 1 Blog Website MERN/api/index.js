import express, { json } from "express";
import authRoute from "./routes/auth.js";
const app = express();
import { config } from "dotenv";
import mongoose from "mongoose";
const {connect, connection, disconnect } = 'mongoose';
import usersRoute from "./routes/users.js";
import postsRoute from "./routes/posts.js";
import categoryRoute from "./routes/categories.js";
import multer from "multer";

config();
app.use(express.json());
app.use('/images', express.static('images'));



const uri = process.env.MONGO_URL;

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (err) {
    // Ensures that the client will close when you finish/error
    console.error("Error connecting to MongoDb: ",err);
  }
}
run().catch(console.dir);

const storage = multer.diskStorage({
  destination:(req, file, cb) => {cb(null, "images")
},
   filename:(req, file, cb) => {
    cb(null,"hello.jpeg")
  }
})

const upload = multer({storage:storage})
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded")
})

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/posts", postsRoute);
app.use("/api/categories", categoryRoute);


app.listen("5000", () => {
    console.log("Backend is running");
});
