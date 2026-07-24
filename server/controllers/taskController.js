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
        console.error(err);
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
      console.error(err);
      return res.status(500).json(err);
    }

    res.status(200).json(result);
  });
};

// =======================
// Get Single Task
// =======================
export const getTaskById = (req, res) => {
  const { id } = req.params;

  const sql = `
    SELECT *
    FROM tasks
    WHERE id = ?
  `;

  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json(err);
    }

    if (result.length === 0) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    res.status(200).json(result[0]);
  });
};

// =======================
// Update Task
// =======================
export const updateTask = (req, res) => {
  const { id } = req.params;

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
    UPDATE tasks
    SET
      title = ?,
      description = ?,
      priority = ?,
      status = ?,
      due_date = ?,
      project_id = ?,
      assigned_to = ?
    WHERE id = ?
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
      id,
    ],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json(err);
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({
          message: "Task not found",
        });
      }

      res.status(200).json({
        success: true,
        message: "Task updated successfully",
      });
    }
  );
};

// =======================
// Update Task Status
// =======================
export const updateTaskStatus = (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const sql = `
    UPDATE tasks
    SET status = ?
    WHERE id = ?
  `;

  db.query(sql, [status, id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        message: "Server Error",
      });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Task status updated successfully",
    });
  });
};

// =======================
// Delete Task
// =======================
export const deleteTask = (req, res) => {
  const { id } = req.params;

  const sql = `
    DELETE FROM tasks
    WHERE id = ?
  `;

  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json(err);
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Task deleted successfully",
    });
  });
};