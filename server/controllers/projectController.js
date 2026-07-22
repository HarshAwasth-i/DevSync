import db from "../config/db.js";

// =======================
// Create Project
// =======================
export const createProject = (req, res) => {
  const { name, description, created_by } = req.body;

  const sql = `
    INSERT INTO projects (name, description, created_by)
    VALUES (?, ?, ?)
  `;

  db.query(sql, [name, description, created_by], (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.status(201).json({
      success: true,
      message: "Project created successfully",
      projectId: result.insertId,
    });
  });
};

// =======================
// Get All Projects
// =======================
export const getProjects = (req, res) => {
  const sql = `
    SELECT
      projects.id,
      projects.name,
      projects.description,
      projects.status,
      projects.created_at,
      users.name AS createdBy
    FROM projects
    JOIN users
      ON projects.created_by = users.id
    ORDER BY projects.created_at DESC
  `;

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.status(200).json(result);
  });
};

// =======================
// Get Single Project
// =======================
export const getProjectById = (req, res) => {
  const { id } = req.params;

  const sql = `
    SELECT *
    FROM projects
    WHERE id = ?
  `;

  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    if (result.length === 0) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    res.status(200).json(result[0]);
  });
};

// =======================
// Update Project
// =======================
export const updateProject = (req, res) => {
  const { id } = req.params;
  const { name, description, status } = req.body;

  const sql = `
    UPDATE projects
    SET
      name = ?,
      description = ?,
      status = ?
    WHERE id = ?
  `;

  db.query(sql, [name, description, status, id], (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Project updated successfully",
    });
  });
};

// =======================
// Delete Project
// =======================
export const deleteProject = (req, res) => {
  const { id } = req.params;

  const sql = `
    DELETE FROM projects
    WHERE id = ?
  `;

  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Project deleted successfully",
    });
  });
};