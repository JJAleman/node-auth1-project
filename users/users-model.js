const db = require('../data/db-config.js');

module.exports = {
    add,
    find,
    findBy,
    findByID,
};

function find() {
    return db('users').select('id', 'username');
}

function findBy(filter) {
    return db('users')
    .select('id', 'username', 'password')
    .where(filter);
}

function add(user){
    return db('users')
    .insert(user, 'id')
    .then(ids => {
        const [id] = ids;
        return findByID(id);
    });
}

function findByID(id) {
    return db('users')
    .select('id', 'username')
    .where({id})
    .first()
}