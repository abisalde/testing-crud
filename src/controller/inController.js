const Intern = require('../model/inModel');


// Get All Interns in the DB
const getInterns = (req, res, next) => {
    Intern.find()
        .then((interns) => res.status(200).json(interns))
        .catch((err) => res.status(400).json('Error getting interns'));
};


// Create new Intern
const postIntern = (req, res, next) => {
    const { firstName, lastName, email, phone, about } = req.body;
    const intern = { firstName, lastName, email, phone, about };
    Intern.create(intern)
        .then(() => res.status(200).json({ message: 'Intern created success' }))
        .catch((e) =>
            res
                .status(400)
                .json({ message: 'Error creating an Intern', error: e.message })
        );
};

// Display itern by ID
const showIntern = (req, res, next) => {
    Intern.findById(req.params.id)
        .then((intern) => res.status(200).json(intern))
        .catch((e) => res.status(400).json('Error getting Intern', e));
};

// Update Intern by ID
const updateIntern = (req, res, next) => {
    Intern.findById(req.params.id)
        .then((intern) => {
            intern.firstName = req.body.firstName;
            intern.lastName = req.body.lastName;
            intern.email = req.body.email;
            intern.phone = req.body.phone;
            intern.above = req.body.about;
            intern
                .save()
                .then(() => res.status(200).json('Intern Updated'))
                .catch((e) => res.status(400).json('Error Updating Intern'));
        })
        .catch((e) => res.status(400).json('Error Getting Intern ' + e));
};


// Delete Intern
const deleteIntern = (req, res, next) => {
    Intern.findOneAndRemove(req.params.id)
        .then(() => {
            res.status(200).json('Intern Deleted');
        })
        .catch((e) => res.status(400).json('Error deleting Intern ' + e));
};

module.exports = {
    getInterns,
    postIntern,
    showIntern,
    updateIntern,
    deleteIntern,
};
