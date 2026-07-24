import db from "../config/db.js";

export const getActivities = (req, res) => {
  const sql = `
    SELECT
      activities.id,
      activities.type,
      activities.message,
      activities.created_at,
      users.name AS createdBy
    FROM activities
    LEFT JOIN users
      ON activities.created_by = users.id
    ORDER BY activities.created_at DESC
    LIMIT 10
  `;

  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({
        message: "Database error",
      });
    }

    res.json(results);
  });
};