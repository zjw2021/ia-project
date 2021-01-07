
// Import Volunteer Model, and asyncHandler middleware
const Volunteer = require('../models/Volunteer')
const asyncHandler = require('../middleware/asyncHandler')

// #type    GET
// #route   /api/volunteers
// #about   Gets all volunteers
exports.getVolunteers = asyncHandler (async (req, res, next) => {
        const volunteers = await Volunteer.find();
        res.status(200).json(volunteers);
})

// #type    GET ID
// #route   /api/volunteers/id
// #about   Gets Specific volunteer
exports.getVolunteer = asyncHandler (async (req, res, next) => {
        const volunteer = await Volunteer.findById(req.params.id);
        res.status(200).json(volunteer);
})

// #type    POST
// #route   /api/volunteers
// #about   Creates volunteer
exports.createVolunteer = asyncHandler (async (req, res, next) => {
        const newVolunteer = await Volunteer.create(req.body);
        res.status(200).json(newVolunteer);
})

// #type    DELETE
// #route   /api/volunteers/id
// #about   Deletes volunteer
exports.deleteVolunteer = asyncHandler (async (req, res, next) => {
        await Volunteer.findByIdAndDelete(req.params.id);
        res.status(200).json(`Volunteer ${req.params.id} has been deleted`);
})
