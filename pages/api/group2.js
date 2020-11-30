const db = require('../lib/db')
const escape = require('sql-template-strings')



  export default async function handler(req, res) {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    let spin = await db.query(escape`
    select spin from spin_table where id = '3'
    `)
    
    res.end(JSON.stringify(spin))
  }