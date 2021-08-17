const express = require('express');
const router = express.Router();

const getTask = require('./../controllers/getTask');
const getAllTasks = require('./../controllers/getAlltasks');
const addTask = require('./../controllers/addTask');
const editTask = require('./../controllers/editTask');
const deleteTask = require('./../controllers/deleteTask');
const updateOrder = require('../controllers/updateOrder');
const contactForm = require('../controllers/contactForm');

router.get('/tasks/:id', getTask);
router.get('/tasks', getAllTasks);
router.post('/tasks', addTask);
router.post('/contact', contactForm);
router.put('/tasks/:id', editTask);
router.post('/position', updateOrder);
router.delete('/tasks/:id', deleteTask);

module.exports = router;