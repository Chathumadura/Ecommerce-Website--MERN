import express, { request, response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware
app.use(
    cors({
        credentials: true,
        origin: process.env.FRONTEND_URL,
    })
);
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev')); // Changed typo from "margan" to "morgan"
app.use(
    helmet({
        crossOriginResourcePolicy: false,
    })
);

// Start the server
const PORT = process.env.PORT || 8070;

app.get("/", (request, response) => {
    response.json({
        message: "server is running"
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
