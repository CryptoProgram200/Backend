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

const corsOptions ={
    origin:'https://combative-plum-nightingale.cyclic.app', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

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
