let app = require("express")();
let bodyParser = require('body-parser')


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get("/", (request, response) => {
    response.send("salut");
});

app.post("/mood", (request, response) => {
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    let content = {
        "mood": request.body,
        "date": date
    }

    let Mood = require('./models/addMood');
    Mood.add(content, function(data){
        
    });

    response.send("ok");

})

app.listen(8000);