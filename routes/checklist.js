const router = require('express').Router()

const Checklist = require('../models/Checklist')

router.get('/', async (req, res) => {
    try {
        let checklists = await Checklist.find({})
        res.status(200).json(checklists)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.post('/', async (req, res) => {
    let { name } = req.body
    let checklist = new Checklist({ name })

    try {
        await checklist.save()
        res.status(201).json(checklist)
    } catch (error) {
        res.status(422).json(error)
    }
})

router.get('/:id', async (req, res) => {
    let checklist = await Checklist.findById(req.params.id)

    try {
        res.status(200).json(checklist)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.put('/:id', async (req, res) => {
    let { name } = req.body

    try {
        let checklist = await Checklist.findByIdAndUpdate(req.params.id, { name }, { new: true })
        res.status(200).json(checklist)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        await Checklist.findByIdAndDelete(req.params.id)
        res.status(200).json({success: true})
    } catch (error) {
        res.status(500).json({success: false, error: error})
    }
})

module.exports = router