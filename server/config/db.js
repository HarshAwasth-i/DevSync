import dotenv from "dotenv";
dotenv.config();

import mysql from "mysql2";

console.log("Host:", process.env.DB_HOST);
console.log("User:", process.env.DB_USER);
console.log("Database:", process.env.DB_NAME);
console.log("Password Length:", process.env.DB_PASSWORD?.length);

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log("✅ MySQL Connected");
});

export default db;