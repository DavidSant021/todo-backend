const router = require('express').Router()

const checklistRouter = require('./checklist')
const { checklistDependent, simpleRouter} = require('./task')

router.use('/checklists', checklistRouter)
router.use('/checklists', checklistDependent)
router.use('/tasks', simpleRouter)

module.exports = router