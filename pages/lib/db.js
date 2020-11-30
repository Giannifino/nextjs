const mysql = require('serverless-mysql')

const db = mysql({
  config: {
    host:"144.76.119.213",
    database: "bak",
    user: "hydroxz",
    password: "Fox9Code95!!",
  },
})

exports.query = async (query) => {
  try {
    const results = await db.query(query)
    
    await db.end()
    return results
  } catch (error) {
    return { error }
  }
}