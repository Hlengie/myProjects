const mysql = require('mysql');

const Connection = require('../helpers/Blocky/Connection')

const conn = new Connection();

conn.createConnection('localhost', 'root', '', mysql)
conn.createDatabase('taxifinder')