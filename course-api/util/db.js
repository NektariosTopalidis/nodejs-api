const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'course-project',
    password: ''
});

module.exports = pool.promise();

