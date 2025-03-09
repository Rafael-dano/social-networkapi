const express = require('express');
const Thought = require('../models/thought'); 
const User = require('../models/user');
const router = express.Router();

// Get all thoughts
router.get('/', async (req, res) => {
    try {
        const thoughts = await Thought.find();
        res.json(thoughts);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get a single thought by ID
router.get('/:id', async (req, res) => {
    try {
        const thought = await Thought.findById(req.params.id);
        res.json(thought);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Create a new thought
router.post('/', async (req, res) => {
    try {
        const newThought = new Thought(req.body);
        await newThought.save();

        // Add thought to user's thoughts array
        const user = await User.findById(req.body.userId);
        user.thoughts.push(newThought._id);
        await user.save();

        res.status(201).json(newThought);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Update a thought by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedThought = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedThought);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Delete a thought by ID
router.delete('/:id', async (req, res) => {
    try {
        await Thought.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Thought deleted' });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Create a reaction to a thought
router.post('/:thoughtId/reactions', async (req, res) => {
    try {
        const thought = await Thought.findById(req.params.thoughtId);
        thought.reactions.push(req.body);
        await thought.save();
        res.status(201).json(thought);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Delete a reaction from a thought
router.delete('/:thoughtId/reactions/:reactionId', async (req, res) => {
    try {
        const thought = await Thought.findById(req.params.thoughtId);
        thought.reactions.pull(req.params.reactionId);
        await thought.save();
        res.status(200).json(thought);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
