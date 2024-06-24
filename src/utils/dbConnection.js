import { connect, connection } from "mongoose";

const user = "vleonardojuanpablo";
const password = "%40EuR3K4!3710";
const dbname = "tasks";
const cluster = "db-test";
const conn = {
  isConnected: false,
};

export async function dbConnection() {
  if (conn.isConnected) return;

  const db = await connect(
    `mongodb+srv://${user}:${password}@${cluster}.pg3rvlv.mongodb.net/${dbname}`
  );
  console.log("Database connected to", db.connection.db.databaseName);
  conn.isConnected = db.connections[0].readyState;
}

connection.on("connected", () => {
  console.log("Mongoose is connected");
});

connection.on("error", (err) => {
  console.log("Mongoose connection error", err);
});
