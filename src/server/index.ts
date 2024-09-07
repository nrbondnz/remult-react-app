import express, { Request, Response, NextFunction } from 'express';
import { remultExpress } from 'remult/remult-express';
import { Remult } from 'remult';
import { Task } from '../shared/model/Task'; // Adjust the path according to your project structure
import { Muscle } from '../shared/model/Muscle';
import { User } from '../shared/model/User'; // Adjust the path according to your project structure
import { Workout } from '../shared/model/Workout'; // Adjust the path according to your project structure
import { Machine } from '../shared/model/Machine'; // Adjust the path according to your project structure
import { UserWorkoutExercise } from '../shared/model/UserWorkoutExercise'; // Adjust the path according to your project structure
import { UserExercise } from '../shared/model/UserExercise'; // Adjust the path according to your project structure
import { Exercise } from '../shared/model/Exercise'; // Adjust the path according to your project structure
import { Location } from '../shared/model/Location'; // Adjust the path according to your project structure

const app = express();

app.use(express.json());
// test
interface AppError extends Error {
    status?: number;
}

// Create an instance of Remult
const remult = new Remult();

// Set up Remult with Express
const api = remultExpress({
    entities: [
        Task, Muscle, User, UserExercise, UserWorkoutExercise, Workout, Machine, Exercise, Location,
    ],
});

app.use(api);

// Enhanced endpoint for Tasks with additional error logging
app.get('/api/tasks', async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const taskRepo = remult.repo(Task);
        const tasks = await taskRepo.find();
        res.json(tasks);
    } catch (error) {
        console.error("Error fetching tasks:", error); // Log error message
        next(error); // Passes errors to the middleware
    }
});

// Enhanced endpoint for Muscles with additional error logging
app.get('/api/muscles', async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const muscleRepo = remult.repo(Muscle);
        const muscles = await muscleRepo.find();
        res.json(muscles);
    } catch (error) {
        console.error("Error fetching muscles:", error); // Log error message
        next(error); // Passes errors to the middleware
    }
});

// Middleware to handle errors
function errorHandler(err: AppError, _req: Request, res: Response, _next: NextFunction) {
    console.error("Handling error:", err); // Log additional error info
    res.status(err.status || 500).json({ message: err.message });
}

// Use the error-handling middleware
app.use(errorHandler);

const port = process.env.SERVER_PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});