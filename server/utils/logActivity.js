import db from "../config/db.js";

function logActivity(type, message, userId) {
  const sql = `
    INSERT INTO activities (type, message, created_by)
    VALUES (?, ?, ?)
  `;

  db.query(sql, [type, message, userId], (err) => {
    if (err) {
      console.error("Activity Log Error:", err);
    }
  });
}

export default logActivity;