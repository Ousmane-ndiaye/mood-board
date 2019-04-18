let db = require('../config/db')

class Produit {


    static all (cb){
        db.query('SELECT * FROM produit', (error, rows) => {
            if(error) throw error

            cb(rows);
        })
    }
}

module.exports = Produit;