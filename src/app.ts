// src/app.ts

import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import { requestIdMiddleware } from './middlewares/request-id.middleware';
import { apiLimiter } from './middlewares/rate-limit.middleware';
import { notFoundMiddleware } from './middlewares/not-found.middleware';
import { errorMiddleware } from './middlewares/error.middleware';

const app: Application = express();

// Security
app.use(helmet());

// Compression
app.use(compression());

// CORS
app.use(cors({
    origin: true,
    credentials: true,
}));

// Request Tracking
app.use(requestIdMiddleware);

// Logging
app.use(morgan('combined'));

// Rate Limiting
app.use('/api', apiLimiter);

// Body Parsing
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Health Check
app.get('/health', (_, res) => {
    res.status(200).json({
        success: true,
        message: 'Application Healthy',
        timestamp: new Date().toISOString(),
    });
});

// Routes
// app.use('/api/v1', router);

// 404 Handler
app.use(notFoundMiddleware);

// Global Error Handler
app.use(errorMiddleware);

export default app;