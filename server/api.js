const BgRoute = "\x1b[45m\x1b[1m%s\x1b[0m";
const FgYellow = "\x1b[33m\x1b[1m";
const star =()=> console.log(FgYellow,'*'.repeat(50));
const loc = (str) => {console.log(BgRoute,"hit "+ str); star();}


const { Story, Chapter, Entry } = require('./models')

// Story =>  Chapter  =>  Entry

module.exports =  {

// Story 
    newStory: (req,res) => Story.create( req.body )
        .then( result => loc('newStory success') || res.json( result ))
        .catch( error => loc('newStory error', error) || res.json( error ))
    ,
    getAllStory: (req,res) => Story.find({})
        .then( result => loc('getAllStory success') || res.json( result ))
        .catch( error => loc('getAllStory error', error) || res.json( error ))
    ,
    getSingleStory: (req,res) => Story.findById(req.params.storyid)
        .then( result => loc('getSingleStory success') || res.json( result ))
        .catch( error => loc('getSingleStory error', error) || res.json( error ))
    ,
    removeStory: (req,res) => Story.findByIdAndDelete(req.params.storyid)
        .then( result => loc('removeStory success') || res.json( result ))
        .catch( error => loc('removeStory error',error) || res.json( error ))
    ,
    updateStory: (req,res) => Story.findByIdAndUpdate(req.params.storyid , req.body , {new:true, runValidators:true})
        .then( result => loc('updateStory success') || res.json( result ))
        .catch( error => loc('updateStory error',error) || res.json( error ))
    ,

// Chapter
    // create
    // get all
    // get one
    // delete
    // edit 


// Entry
    // create
    // get all
    // get one
    // delete
    // edit 



}