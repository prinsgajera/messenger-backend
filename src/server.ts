import 'reflect-metadata';
import http from 'http';
import app from './app';

const PORT = Number(process.env.PORT) || 5000;

async function bootstrap(): Promise<void> {
    try {
        // Database Connection
        // await initializeDatabase();

        // Redis Connection
        // await initializeRedis();

        const server = http.createServer(app);

        // Socket Server
        // initializeSocket(server);

        server.listen(PORT, () => {
            console.log(`
=========================================
🚀 Messenger Backend Started
🌎 Environment : ${process.env.NODE_ENV}
📡 Port        : ${PORT}
=========================================
      `);
        });

        /**
         * Graceful Shutdown
         */
        process.on('SIGTERM', async () => {
            console.log('SIGTERM received');

            server.close(() => {
                process.exit(0);
            });
        });

        process.on('SIGINT', async () => {
            console.log('SIGINT received');

            server.close(() => {
                process.exit(0);
            });
        });
    } catch (error) {
        console.error('Bootstrap Failed', error);
        process.exit(1);
    }
}

bootstrap();