import db from "../config/db.js";

// =======================
// Create Task
// =======================
export const createTask = (req, res) => {
  const {
    title,
    description,
    priority,
    status,
    due_date,
    project_id,
    assigned_to,
  } = req.body;

  const sql = `
    INSERT INTO tasks
    (title, description, priority, status, due_date, project_id, assigned_to)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      title,
      description,
      priority,
      status,
      due_date,
      project_id,
      assigned_to,
    ],
    (err, result) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.status(201).json({
        success: true,
        message: "Task created successfully",
        taskId: result.insertId,
      });
    }
  );
};

// =======================
// Get All Tasks
// =======================
export const getTasks = (req, res) => {
  const sql = `
    SELECT
      tasks.id,
      tasks.title,
      tasks.description,
      tasks.priority,
      tasks.status,
      tasks.due_date,
      tasks.created_at,
      projects.name AS projectName,
      users.name AS assignedTo
    FROM tasks
    JOIN projects
      ON tasks.project_id = projects.id
    LEFT JOIN users
      ON tasks.assigned_to = users.id
    ORDER BY tasks.created_at DESC
  `;

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.status(200).json(result);
  });
};