import db from "../config/db.js";

export const getDashboardStats = async (req, res) => {
  try {
    const queries = [
      "SELECT COUNT(*) AS total FROM projects",
      "SELECT COUNT(*) AS total FROM tasks WHERE status='Completed'",
      "SELECT COUNT(*) AS total FROM tasks WHERE status='Pending'",
      "SELECT COUNT(*) AS total FROM users",
    ];

    const executeQuery = (query) =>
      new Promise((resolve, reject) => {
        db.query(query, (err, result) => {
          if (err) reject(err);
          else resolve(result);
        });
      });

    const [
      projects,
      completedTasks,
      pendingTasks,
      users,
    ] = await Promise.all(queries.map(executeQuery));

    res.json({
      projects: projects[0].total,
      completedTasks: completedTasks[0].total,
      pendingTasks: pendingTasks[0].total,
      teamMembers: users[0].total,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};