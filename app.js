import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import userRouter from './routes/user-route';
import adminRouter from './routes/admin-routes';
import movieRouter from './routes/movie-routes';
import bookingsRouter from './routes/booking-routes';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/movie", movieRouter);
app.use("/booking", bookingsRouter)

mongoose.connect(
    `${process.env.MONGO_URL}`
).then(() => {
    app.listen(7080, () => {
        console.log("Connected to Mongo Database")
    })
}).catch((e) => console.log(e));
