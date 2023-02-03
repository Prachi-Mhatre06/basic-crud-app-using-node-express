const pool = require('../db')
const queries = require('./queries')
const { validationResult } = require('express-validator')

const getCustomers = (req, res) => {
    pool.query(queries.getCustomers, (error, results) => {
        if (error) throw error
        res.render('customer/list', {
            title: 'customer listing',
            pageHeading: 'Customers Listing',
            customers: results.rows
        }) 
    })
}

const addCustomer = (req, res) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
        pool.query(queries.addCustomer,[req.body.name, req.body.email], (error, results) => {
            if (error) throw error
            res.status(200).redirect('/customer/listing')
        })
    } else {
        res.render('customer/add', {
            pageHeading: 'Add New Customer',
            errors:errors.errors
        })
    }
}

const editCustomer = (req, res) => {
    pool.query(queries.getCustomerById, [parseInt(req.params.id)], (error, result) => {
        if(error) throw error
        res.render('customer/edit', {
            pageHeading: 'Update Existing Customer',
            customerData: result.rows
        })
    })
}

const updateCustomer = (req, res) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
        pool.query(queries.updateCustomer,[req.body.name, req.body.email, parseInt(req.params.id)], (error, results) => {
            if (error) throw error
            res.status(200).redirect('/customer/listing')
        })
    } else {
        res.render('/customer/edit/'+req.params.id, {
            pageHeading: 'Add New Customer',
            errors:errors.errors
        })
    }
}

const getCustomerById = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query(queries.getCustomerById, [id], (error, result) => {
        if(error) throw error
        res.render('customer/show', {
            pageHeading: 'Customer Details',
            customerData: result.rows
        })
    })
}

const deleteCustomer = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query(queries.deleteCustomer, [id], (error, result) => {
        if(error) throw error
        res.status(200).redirect('/customer/listing')
    })
}

module.exports = {
    getCustomers,
    addCustomer,
    editCustomer,
    updateCustomer,
    getCustomerById,
    deleteCustomer
}