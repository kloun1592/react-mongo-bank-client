const router = require('express').Router();

// Item model
const Person = require('../../models/Person');

// Create
// Endpoint to post data to the database
// POST request
router.post('/', (req, res) => {
    const personToPost = new Person({
        name: req.body.name,
        surname: req.body.surname,
        patronymic: req.body.patronymic,
        pass_series: req.body.pass_series,
        pass_num: req.body.pass_num,
        pass_code: req.body.pass_code,
        pass_date: new Date,
        pass_ufms: req.body.pass_ufms,
        pass_place: req.body.pass_place,
        birh_date: new Date,
        birth_place: req.body.birth_place
    });
    // To learn about the save method: https://mongoosejs.com/docs/api.html#model_Model-save
    personToPost.save()
        .then(person => res.json(person))
})

// Read
// Endpoint to grab all the data from the database
// GET request
router.get('/', (req, res) => {
    // To learn about the find method: https://mongoosejs.com/docs/api.html#query_Query-find
    Person.find()
        .then(person => res.json(person))
})

router.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

// Update
// Endpoint to update data in the database
// PUT request
router.put('/:id', (req, res) => {
    Person.findByIdAndUpdate(req.params.id,
        {
            name: req.body.name || "Untitled Task"
        }, 
        {
            new: true
        })
    .then(() => res.json({ success: true }))
    // return 404 if not found
    .catch(err => res.status(404).json({ success: false }) )
})

// Delete
// Endpoint to delete data in the database
// DELETE request
router.delete('/:id', (req, res) => {
    Person.findById(req.params.id)
        .then(person => {
            person.remove()
                .then(() => res.json({ success: true }))
                // return 404 if not found
                .catch(err => res.status(404).json({ success: false }) )
        })

})

module.exports = router;