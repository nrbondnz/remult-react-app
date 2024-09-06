import { Remult } from 'remult';
import { Task } from './shared/model/Task'; // Adjust the path according to your project structure
import { Muscle } from './shared/model/Muscle'; // Adjust the path according to your project structure
import { User } from './shared/model/User'; // Adjust the path according to your project structure
import { Workout } from './shared/model/Workout'; // Adjust the path according to your project structure
import { Machine } from './shared/model/Machine'; // Adjust the path according to your project structure
import { UserWorkoutExercise } from './shared/model/UserWorkoutExercise'; // Adjust the path according to your project structure
import { UserExercise } from './shared/model/UserExercise'; // Adjust the path according to your project structure
import { Exercise } from './shared/model/Exercise'; // Adjust the path according to your project structure
import { Location } from './shared/model/Location'; // Adjust the path according to your project structure
import * as fs from 'fs';
import * as path from 'path';

const entityMap = new Map<string, any>([
    ['Tasks', Task],
    ['Muscles', Muscle],
    ['Users', User],
    ['Workouts', Workout],
    ['Machines', Machine],
    ['UserWorkoutExercises', UserWorkoutExercise],
    ['UserExercises', UserExercise],
    ['Exercises', Exercise],
    ['Locations', Location],
]);

async function seedData() {
    const remult = new Remult();
    const dataDir = path.resolve(__dirname, '../data');

    // Read all files in the directory
    const files = fs.readdirSync(dataDir);

    for (const file of files) {
        // Get the entity name (without the .json extension)
        const entityName = path.basename(file, '.json');

        // Check if the entity is mapped
        if (entityMap.has(entityName)) {
            const entity = entityMap.get(entityName);

            // Load JSON data
            const data: any[] = JSON.parse(fs.readFileSync(path.join(dataDir, file), 'utf8'));

            // Get repository and insert data
            const repo = remult.repo(entity);
            for (const item of data) {
                await repo.insert(item);
            }

            console.log(`Seeded ${data.length} items into ${entityName}`);
        } else {
            console.warn(`No entity mapping found for ${entityName}`);
        }
    }

    console.log('Database seeded successfully.');
}

seedData().catch(err => {
    console.error('Error seeding database:', err);
    process.exit(1);
});