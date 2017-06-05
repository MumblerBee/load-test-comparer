var app = require('express')();
var http = require('http').Server(app);


var PORT = 5081;



app.get('/sleep', (req, res, next) => {
    if (req.query.sleep) {
        setTimeout(() => {
            res.json({ code: 0 });
            res.end();
        }, req.query.sleep);
    } else {
        next();
    }
})



var port = PORT;
http.listen(port, function() {
    console.log('listening on *:' + port);
});
