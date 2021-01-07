

// Import Admin Model, and asyncHandler middleware
const Admin = require('../models/Administer')
const asyncHandler = require('../middleware/asyncHandler')

// #type    GET
// #route   /api/admins
// #about   Gets all admins
exports.getAdmins = asyncHandler (async (req, res, next) => {
        const admins = await Admin.find();
        res.status(200).json(admins);
})

// #type    GET ID
// #route   /api/admins/id
// #about   Gets Specific admin
exports.getAdmin = asyncHandler (async (req, res, next) => {
        const admin = await Admin.findById(req.params.id);
        res.status(200).json(admin);
})

// #type    POST
// #route   /api/admins
// #about   Creates admin
exports.createAdmin = asyncHandler (async (req, res, next) => {
        const newAdmin = await Admin.create(req.body);
        res.status(200).json(newAdmin);
})

// #type    DELETE
// #route   /api/admins/id
// #about   Deletes admin
exports.deleteAdmin = asyncHandler (async (req, res, next) => {
        await Admin.findByIdAndDelete(req.params.id);
        res.status(200).json(`Admin ${req.params.id} has been deleted`);
})
