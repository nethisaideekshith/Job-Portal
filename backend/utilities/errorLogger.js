const fs = require('fs');
let errorLogger = function (err, req, res, next) {
    if (err) {
        fs.appendFile('ErrorLogger.txt',new Date() +" : "+ err.stack + "\n" , (error) => {
            if (error) {
                console.log("logging error failed");
            }
        });
        if(err.status) {
          res.status(err.status);
        }
        else {
          res.status(500);
        }
        res.json({ "message": err.message })
    }
    next();
}
module.exports = errorLogger;
