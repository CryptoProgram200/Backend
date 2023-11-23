import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import userRouter from './routes/user-route.js';
import adminRouter from './routes/admin-routes.js';
import movieRouter from './routes/movie-routes.js';
import bookingsRouter from './routes/booking-routes.js';

const PORT = process.env.PORT || 7080 
dotenv.config();
const app = express();
app.use(express.json());


app.use(function (req, res, next) {
    // Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization"
    );
    next();
  });
  
app.use(cors(corsOptions));

app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/movie", movieRouter);
app.use("/booking", bookingsRouter)

mongoose.connect(
    `${process.env.MONGO_URL}`
).then(() => {
    app.listen(PORT, () => {
        console.log("Connected to Mongo Database")
    })
}).catch((e) => console.log(e));
