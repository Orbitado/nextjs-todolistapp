import Task from "@/models/Task.js";
import { dbConnection } from "@/utils/dbConnection.js";

export const loadTasks = async () => {
  await dbConnection();
  const tasks = await Task.find();
  return tasks;
};
