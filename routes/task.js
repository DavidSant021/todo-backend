const router = require('express').Router()
const simpleRouter = require('express').Router()

const Checklist = require('../models/Checklist')
const Task = require('../models/Task')

router.get('/:id/tasks', async (req, res) => {
    try {
        let checklistId = req.params.id
        let tasks = await Task.find({ checklist: checklistId }).exec()
        res.status(200).json(tasks)
    } catch (error) {
        res.status(422).json(error)
    }
})

router.post('/:id/tasks', async (req, res) => {
    let { name } = req.body.task
    let task = new Task({ name, checklist: req.params.id })

    try {
        await task.save()
        let checklist = await Checklist.findById(req.params.id)
        checklist.tasks.push(task)
        await checklist.save()
        res.status(200).json(checklist)
    } catch (error) {
        res.status(422).json(error)
    }
})

simpleRouter.delete('/:id', async (req, res) => {
    try {
        let task = await Task.findByIdAndDelete(req.params.id)
        let checklist = await Checklist.findById(task.checklist)
        let taskToRemove = checklist.tasks.indexOf(task._id)
        checklist.tasks.splice(taskToRemove, 1)
        checklist.save()
        res.status(200).json({ success: true })
    } catch (error) {
        res.status(422).json({ success: false, error: error })
    }
})

module.exports = { checklistDependent: router, simpleRouter }