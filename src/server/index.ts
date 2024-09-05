import express, { Request, Response, NextFunction } from 'express';
import { remultExpress } from 'remult/remult-express';
import { Remult } from 'remult';
import { Task } from '../shared/model/Task'; // Adjust the path according to your project structure
import { Muscle } from '../shared/model/Muscle'; // Adjust the path according to your project structure

const app = express();

app.use(express.json());

interface AppError extends Error {
    status?: number;
}

// Create an instance of Remult
const remult = new Remult();

// Set up Remult with Express
const api = remultExpress({
    entities: [Task, Muscle]
});

app.use(api);

// Endpoint explicitly calling repository to fetch Tasks
app.get('/tasks', async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const taskRepo = remult.repo(Task);
        const tasks = await taskRepo.find();
        res.json(tasks);
    } catch (error) {
        next(error); // Passes errors to the middleware
    }
});

// Endpoint explicitly calling repository to fetch Muscles
app.get('/muscles', async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const muscleRepo = remult.repo(Muscle);
        const muscles = await muscleRepo.find();
        res.json(muscles);
    } catch (error) {
        next(error); // Passes errors to the middleware
    }
});

// Middleware to handle errors
function errorHandler(err: AppError, _req: Request, res: Response, _next: NextFunction) {
    res.status(err.status || 500).json({ message: err.message });
}

// Use the error-handling middleware
app.use(errorHandler);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});