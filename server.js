const express = require('express');
const routes  = require('./server/routes');
const app = routes(express());
const path = require('path');

// set static folder to angular dist folder
app.use(
    express.static( __dirname + '/storybook/dist/storybook')
);

// always render the angular view - render routing will be handled there
app.all('*', res=> {
    res.sendFile(path.resolve('./storybook/dist/storybook/index.html'))
});

app.listen(
    8000, err=>err 
    ? console.log(err) 
    : console.log('listening on 8000 ===> go go go!') );


