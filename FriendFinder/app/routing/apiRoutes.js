var conqueror = require("./../data/friends.js");
var bestmatch = 45;
var bestconq = {};

function apiroutes (app) {
    app.get("/api/friends", function (req, res) {
        res.json(conqueror);
    });



    app.post("/api/friends", function (req, res) {
        var newconqueror = req.body;
        var newconqTotal = 0;
        console.log(newconqueror);
        console.log(newconqueror["scores[]"]);

            for (var x = 0; x < newconqueror["scores[]"].length ; x++) {
                newconqTotal += parseInt(newconqueror["scores[]"][x]);
            }


        for (var i = 0; i < conqueror.length; i++){
            var total = 0;
            for (var j=0; j < conqueror[i].scores.length; j++) {
                total += conqueror[i].scores[j];
            }
            console.log("this is the total for "+ conqueror[i].name + " " + total);
            console.log("this is the total for Me "+ newconqTotal);
            if (Math.abs(newconqTotal - total) < bestmatch ) {
                bestconq = conqueror[i];
                bestmatch = Math.abs(newconqTotal - total);
            }
        }
        console.log(bestmatch);
        conqueror.push(newconqTotal);
        res.send(bestconq);
    });
}

module.exports = apiroutes;