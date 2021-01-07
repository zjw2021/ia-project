
const express = require('express');
const router = express.Router();

//Import volunteer controllers
const { getAdmins, 
        getAdmin, 
        createAdmin,
        deleteAdmin
    } = require('../controllers/admin');

router.route('/').get(getAdmins).post(createAdmin);
router.route('/:id').get(getAdmin).delete(deleteAdmin);


module.exports = router;