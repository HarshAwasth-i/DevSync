import db from "../config/db.js";

// =======================
// Create Team Member
// =======================
export const createTeam = (req, res) => {
  const { name, email, role, created_by } = req.body;

  const sql = `
    INSERT INTO teams (name, email, role, created_by)
    VALUES (?, ?, ?, ?)
  `;

  db.query(sql, [name, email, role, created_by], (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.status(201).json({
      success: true,
      message: "Team member added successfully",
      memberId: result.insertId,
    });
  });
};

// =======================
// Get All Team Members
// =======================
export const getTeams = (req, res) => {
  const sql = `
    SELECT
      teams.id,
      teams.name,
      teams.email,
      teams.role,
      teams.avatar,
      teams.created_at,
      users.name AS createdBy
    FROM teams
    JOIN users
      ON teams.created_by = users.id
    ORDER BY teams.created_at DESC
  `;

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.status(200).json(result);
  });
};

// =======================
// Get Single Team Member
// =======================
export const getTeamById = (req, res) => {
  const { id } = req.params;

  db.query(
    "SELECT * FROM teams WHERE id = ?",
    [id],
    (err, result) => {
      if (err) {
        return res.status(500).json(err);
      }

      if (result.length === 0) {
        return res.status(404).json({
          message: "Team member not found",
        });
      }

      res.status(200).json(result[0]);
    }
  );
};

// =======================
// Update Team Member
// =======================
export const updateTeam = (req, res) => {
  const { id } = req.params;
  const { name, email, role } = req.body;

  const sql = `
    UPDATE teams
    SET
      name = ?,
      email = ?,
      role = ?
    WHERE id = ?
  `;

  db.query(sql, [name, email, role, id], (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Team member not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Team member updated successfully",
    });
  });
};

// =======================
// Delete Team Member
// =======================
export const deleteTeam = (req, res) => {
  const { id } = req.params;

  db.query(
    "DELETE FROM teams WHERE id = ?",
    [id],
    (err, result) => {
      if (err) {
        return res.status(500).json(err);
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({
          message: "Team member not found",
        });
      }

      res.status(200).json({
        success: true,
        message: "Team member deleted successfully",
      });
    }
  );
};