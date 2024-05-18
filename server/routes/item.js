const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const requireLogin = require("../middleware/requireLogin");
const itemModel = mongoose.model("Item");

router.get(
  "/allitems",
  /*requireLogin,*/ (req, res) => {
    itemModel
      .find()
      .populate("artist", "_id username name")
      .then((items) => {
        res.json({ items });
      })
      .catch((err) => {
        console.log(err);
      });
  }
);

router.post("/createitem", requireLogin, (req, res) => {
  const { title, price, description, category, image } = req.body;
  if (!title || !price || !category || !image) {
    return res.status(422).json({ error: "Please enter all required fields" });
  }

  req.user.password = undefined; //prevents the user password to be stored in items.
  const item = new itemModel({
    title,
    price,
    description,
    category,
    image,
    artist: req.user,
  });
  item
    .save()
    .then((result) => {
      res.json({ item: result });
    })
    .catch((err) => {
      console.log();
    });
});

router.get("/myitems", requireLogin, (req, res) => {
  itemModel
    .find({ artist: req.user._id })
    .populate("artist", "_id username name")
    .then((myitems) => {
      res.json({ myitems });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
