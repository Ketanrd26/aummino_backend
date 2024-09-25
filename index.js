import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./route/userRoute.js";
import blogRouter from "./route/blogData.js";
import bodyParser from 'body-parser';
import loginRouter from "./route/LoginRoute.js"
dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

let corOption = {
    origin:"http://localhost:3000",
    optionsSuccessStatus: 200 
}
app.use(cors(corOption));
app.use("/",loginRouter )
app.use("/", userRoute);
app.use("/", blogRouter);

app.use("/contactData",userRoute )

const port = process.env.PORT || 5001;
const host = process.env.PORT.Ip ; // IP address to listen on

const uri = process.env.MONGO_URI;

app.get("/", (req, res) => {
    res.send("hello world")
});

async function connectToDatabase() {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
}

connectToDatabase();

app.listen(port, host, () => {
  console.log(`App running on http://${host}:${port}`);
});
