import { NextResponse } from "next/server";
import { dbConnection } from "@/utils/dbConnection";
import TasksModel from "@/models/Task.js";

export async function GET() {
  dbConnection();

  const tasks = await TasksModel.find();
  return NextResponse.json(tasks);
}

export async function POST(request) {
  const task = await request.json();
  const newTask = new TasksModel(task);
  const savedTask = await newTask.save();
  console.log(savedTask);
  return NextResponse.json({ message: "Task created" });
}
