const {Router}= require('express');
const router = Router();

const {getUsers, createUser, deleteUser} = require('../controllers/userscontroller')

router.route('/') 
    .get(getUsers)
    .post(createUser);

    //http://localhost4000/api/users/4

    router.route('/:id')
    .delete(deleteUser);

module.exports = router;