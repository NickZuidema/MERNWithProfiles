const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const requireLogin = require("../middleware/requireLogin");
const itemModel = mongoose.model("Item");
const userModel = mongoose.model("User");

//users will be uniquely identified by _id, not username
router.get("/profile/:id", requireLogin, (req, res) => {
  userModel
    .findOne({ _id: req.params.id })
    .select("-password")
    .then((user) => {
      if (!user) {
        console.log("User not found");
        return res.status(404).json({ error: "User not found" });
      }
      console.log("GOING TO itemModel");
      itemModel
        .find({ artist: req.params.id })
        .populate("artist", "_id name")
        .exec((err, items) => {
          if (err) {
            console.log("Error fetching items:", err);
            return res.status(422).json({ error: err });
          }
          res.json({ user, items });
        });
    })
    .catch((err) => {
      console.log("Error finding user:", err);
      return res.status(404).json({ error: "User not found" });
    });
});

module.exports = router;
