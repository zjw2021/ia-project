
const express = require('express');
const router = express.Router();

//Import volunteer controllers
const { getVolunteers, 
        getVolunteer, 
        createVolunteer,
        deleteVolunteer
    } = require('../controllers/volunteer');

router.route('/').get(getVolunteers).post(createVolunteer);
router.route('/:id').get(getVolunteer).delete(deleteVolunteer);


module.exports = router;
