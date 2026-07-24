import db from "../config/db.js";
import logActivity from "../utils/logActivity.js";

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

    // Activity Log
    logActivity(
      "team",
      `Added ${name} to the team`,
      created_by
    );

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
  const { name, email, role, created_by } = req.body;

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

    // Activity Log
    logActivity(
      "team",
      `Updated ${name}'s profile`,
      created_by
    );

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
  const { created_by } = req.body;

  // Get member name first
  db.query(
    "SELECT name FROM teams WHERE id = ?",
    [id],
    (err, rows) => {
      if (err) {
        return res.status(500).json(err);
      }

      if (rows.length === 0) {
        return res.status(404).json({
          message: "Team member not found",
        });
      }

      const memberName = rows[0].name;

      db.query(
        "DELETE FROM teams WHERE id = ?",
        [id],
        (err, result) => {
          if (err) {
            return res.status(500).json(err);
          }

          // Activity Log
          logActivity(
            "team",
            `Removed ${memberName} from the team`,
            created_by
          );

          res.status(200).json({
            success: true,
            message: "Team member deleted successfully",
          });
        }
      );
    }
  );
};