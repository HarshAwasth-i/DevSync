import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import db from "../config/db.js";

// ======================
// Register User
// ======================
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validation
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Check if user already exists
    db.query(
      "SELECT * FROM users WHERE email = ?",
      [email],
      async (err, results) => {
        if (err) {
          return res.status(500).json({
            success: false,
            message: "Database error",
            error: err,
          });
        }

        if (results.length > 0) {
          return res.status(400).json({
            success: false,
            message: "Email already exists",
          });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert user
        db.query(
          "INSERT INTO users(name, email, password) VALUES (?, ?, ?)",
          [name, email, hashedPassword],
          (err, result) => {
            if (err) {
              return res.status(500).json({
                success: false,
                message: "Registration failed",
                error: err,
              });
            }

            res.status(201).json({
              success: true,
              message: "User registered successfully",
              data: {
                id: result.insertId,
                name,
                email,
              },
            });
          }
        );
      }
    );
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

// ======================
// Login User
// ======================
export const login = (req, res) => {
  const { email, password } = req.body;

  // Validation
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required",
    });
  }

  db.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    async (err, results) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: "Database error",
          error: err,
        });
      }

      if (results.length === 0) {
        return res.status(401).json({
          success: false,
          message: "Invalid email or password",
        });
      }

      const user = results[0];

      // Compare password
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(401).json({
          success: false,
          message: "Invalid email or password",
        });
      }

      // Generate JWT Token
      const token = jwt.sign(
        {
          id: user.id,
          email: user.email,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "7d",
        }
      );

      // Success Response
      res.status(200).json({
        success: true,
        message: "Login successful",
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
      });
    }
  );
};

// =======================
// Get All Users
// =======================
export const getUsers = (req, res) => {
  const sql = `
    SELECT id, name, email
    FROM users
    ORDER BY name
  `;

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.status(200).json(result);
  });
};