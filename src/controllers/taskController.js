const { Task } = require('../models');

const createTask = async (req, res) => {
    try {
        const { description, status, assignedTo, category } = req.body;
        //const { description, status, assignedTo } = req.body;
        console.log("-=-=-=->>>>> createTask")
        console.log("-> ", req.body)

        const task = await Task.create({ description, status, assignedTo, category });
        //const task = await Task.create({ description, status, assignedTo });
        
        console.log("-=->>> RETORNO")
        console.log(":::-> ", task.dataValues)

        return res.status(201).json(task);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const getAllTasks = async (req, res) => {
    try {
        console.log("-=-=-=->>>>> getAllTasks")
        console.log("-> ", req.body)

        const tasks = await Task.findAll();

        console.log("-=->>> RETORNO")
        console.log(":::-> ", tasks.dataValues)

        return res.status(200).json(tasks);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const getTaskById = async (req, res) => {
    try {
        const task = await Task.findByPk(req.params.id);
        
        console.log("-=->>> RETORNO")
        console.log(":::-> ", task)

        if (task) {
            return res.status(200).json(task);
        } else {
            return res.status(404).json({ error: 'Task not found' });
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const updateTask = async (req, res) => {
    try {
        const { description, status, assignedTo, category } = req.body;
        //const { description, status, assignedTo } = req.body;

        const task = await Task.findByPk(req.params.id);
        
        console.log("-=->>> RETORNO")
        console.log(":::-> ", task)

        if (task) {
            await task.update({ description, status, assignedTo, category });
            //await task.update({ description, status, assignedTo });

            await task.reload();

            return res.status(200).json(task);
        } else {
            return res.status(404).json({ error: 'Task not found' });
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const deleteTask = async (req, res) => {
    try {
        const task = await Task.findByPk(req.params.id);
        
        console.log("-=->>> RETORNO")
        console.log(":::-> ", task)

        if (task) {
            await task.destroy();

            return res.status(204).send();
        } else {
            return res.status(404).json({ error: 'Task not found' });
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTask
}