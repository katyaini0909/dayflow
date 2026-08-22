const express = require("express");
const User = require("../models/User");
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");
const LeaveRequest = require("../models/LeaveRequest");
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
router.get(
  "/leave",
  authMiddleware,
  adminMiddleware,
  async (req, res) => {
    try {
      const filter = {};

      if (req.query.status) {
        filter.status = req.query.status;
      }

      const leaveRequests = await LeaveRequest.find(filter).sort({
        createdAt: -1,
      });

      res.json({ leaveRequests });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        message: "Server error",
      });
    }
  }
);

router.patch(
  "/leave/:leaveId/approve",
  authMiddleware,
  adminMiddleware,
  async (req, res) => {
    try {
      const leaveRequest = await LeaveRequest.findByIdAndUpdate(
        req.params.leaveId,
        { status: "approved" },
        { new: true }
      );

      if (!leaveRequest) {
        return res.status(404).json({
          message: "Leave request not found",
        });
      }

      res.json({
        message: "Leave request approved",
        leaveRequest,
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        message: "Server error",
      });
    }
  }
);

router.patch(
  "/leave/:leaveId/reject",
  authMiddleware,
  adminMiddleware,
  async (req, res) => {
    try {
      const leaveRequest = await LeaveRequest.findByIdAndUpdate(
        req.params.leaveId,
        { status: "rejected" },
        { new: true }
      );

      if (!leaveRequest) {
        return res.status(404).json({
          message: "Leave request not found",
        });
      }

      res.json({
        message: "Leave request rejected",
        leaveRequest,
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        message: "Server error",
      });
    }
  }
);
module.exports = router;