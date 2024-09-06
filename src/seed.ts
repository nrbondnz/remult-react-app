import { Remult } from "remult";
import { Task } from "./shared/model/Task"; // Adjust the path according to your project structure
import { Muscle } from "./shared/model/Muscle"; // Adjust the path according to your project structure
import * as fs from "fs";
import * as path from "path";

async function seedData() {
    const remult = new Remult();

    // Function to load JSON data from a file
    const loadJson = (filename: string) => {
        const filepath = path.resolve(__dirname, "../data", filename);
        return JSON.parse(fs.readFileSync(filepath, "utf8"));
    };

    // Load and seed Task data
    const taskData: Task[] = loadJson("Tasks.json");
    const taskRepo = remult.repo(Task);
    for (const task of taskData) {
        await taskRepo.insert(task);
    }

    // Load and seed Muscle data
    const muscleData: Muscle[] = loadJson("Muscles.json");
    const muscleRepo = remult.repo(Muscle);
    for (const muscle of muscleData) {
        await muscleRepo.insert(muscle);
    }

    console.log("Database seeded successfully.");
}

seedData().catch(err => {
    console.error("Error seeding database:", err);
    process.exit(1);
});