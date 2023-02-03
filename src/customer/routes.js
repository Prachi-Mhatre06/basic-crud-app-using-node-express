const { Router } = require('express');
const controller = require('./controller')
const { customerValidationRules } = require('./validator.js')
const router = Router();

router.get('/', controller.getCustomers)
router.get('/customer/listing', controller.getCustomers)
router.get('/customer/new', (req, res) => {
    res.render('customer/add', {
        pageHeading: 'Add New Customer',
    })
})
router.post('/customer/add', customerValidationRules(), controller.addCustomer)
router.get('/customer/:id', controller.getCustomerById)
router.get('/customer/delete/:id', controller.deleteCustomer)
router.get('/customer/edit/:id', controller.editCustomer)
router.post('/customer/update/:id', customerValidationRules(), controller.updateCustomer)
module.exports = router;