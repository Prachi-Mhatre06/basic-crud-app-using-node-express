const getCustomers = "SELECT * FROM users";
const getCustomerById = "SELECT * FROM users where id = $1";
const addCustomer = "INSERT INTO users (name, email) values ($1, $2)";
const updateCustomer = "Update users set name = $1, email = $2 where id = $3";
const deleteCustomer = "Delete FROM users where id = $1";

module.exports = {
    getCustomers,
    getCustomerById,
    addCustomer,
    updateCustomer,
    deleteCustomer
}