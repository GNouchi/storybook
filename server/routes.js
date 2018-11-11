const api = require('./api')
const bp = require('body-parser');


module.exports = app => {
    app.use(bp.json()); 


    // create
    // get all
    // get one
    // delete
    // edit 

    return app;
}