import express, { json } from "express";
import authRoute from "./routes/auth.js";
const app = express();
import { config } from "dotenv";
import mongoose from "mongoose";
const {connect, connection, disconnect } = 'mongoose';
import usersRoute from "./routes/users.js";
import postsRoute from "./routes/posts.js";

config();
app.use(express.json());


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


app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/posts", postsRoute);


app.listen("5000", () => {
    console.log("Backend is running");
});
