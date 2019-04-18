let db = require('../config/db')

class addMood {


    static add (content){
        db.query('INSERT INTO mood SET etat = ?, jour = ?',
        [content.mood.etat, content.date], function(err, result){

            if(content.mood.etat == -1){
                db.query('INSERT INTO justificatif SET content = ?, mood = ?',
                [content.mood.commentaire, result.insertId],
            );
            }
        }
        );
    }
}

module.exports = addMood;