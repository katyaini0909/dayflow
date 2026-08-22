const express = require("express");
const User = require("../models/User");
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

const router = express.Router();

router.get(
  "/employees",
  authMiddleware,
  adminMiddleware,
  async (req, res) => {
    try {
      const employees = await User.find(
        { role: "employee" },
        "-password"
      );

      res.json({ employees });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        message: "Server error",
      });
    }
  }
);

module.exports = router;