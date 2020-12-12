const express = require("express");
const router = express.Router();
const Post = require("../models/Post"); //Post is the model of mongoose

//Get back all the posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find(); //we can apply filtering here also
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

//Submits a post
router.post("/", async (req, res) => {
  // console.log(req.body);//this will not run by default we have to install another package i.e bodyparser which parse our request and handles our data
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//specific post
router.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

//delete post
router.delete("/:postId", async (req, res) => {
  try {
    const removedPost = await Post.remove({ _id: req.params.postId });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//update post
router.patch("/:postId", async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title } }
    );
    res.json(updatedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
