import { NextResponse } from "next/server";
import { dbConnection } from "@/utils/dbConnection";
import { ObjectId } from "mongodb";
import TasksModel from "@/models/Task.js";
import mongoose from "mongoose";

export async function GET(request, { params }) {
  dbConnection();
  const task = await TasksModel.findById(params.id);
  console.log(task);

  if (!task || task == null) {
    return new NextResponse("Task not found. Try with a different id", {
      status: 404,
    });
  } else {
    try {
      return NextResponse.json(task);
    } catch (err) {
      return new NextResponse("Task not found. Try with a different id", {
        status: 404,
      });
    }
  }
}
