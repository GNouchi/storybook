const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const { alphaOnly } = require('./masterValidator')(); 

mongoose.connect(
    'mongodb://localhost/storybook',
    {useNewUrlParser:true},
    err => err ? console.log(err) : console.log("====> db running fine"),    
)



EntrySchema = new mongoose.Schema({
    contributor: {
        type:String
    },
    content: {
        type: String,
        minlength: [25, 'Please contribute at least a few sentences'],
        maxlength: [500, 'Chapters are limited to 500 words'],
    },
    points: {
        type:Number,
        default:10,
    }
},{timestamps:true})


ChapterSchema =  new mongoose.Schema({
    chapternumber:{
        type:Number,
        required:true
    },
    entry: [EntrySchema]
   
})


// accepted stories
StorySchema = new mongoose.Schema({
    title: {
        type: String,
        required:[true,'Please enter a name'],
        validate: [ alphaOnly.validator, alphaOnly.description, ],
        unique: true,
        uniqueCaseInsensitive: true ,
    },
    description: {
        type: String,
        maxlength:[500,'Descriptions should be at less than 500 characters'],
    },
    creator: {
        type: String,
        default:'Anon'+ Math.random()*99999,
    },
    rules: {
        type: String,
    },
    chapters: [ChapterSchema], 
 
    // votes:{
    //     upvotes:{
    //         default: 0,
    //         type: Number
    //     },
    //     downvotes:{
    //         default: 0,
    //         type: Number
    //     },
    //     type:object,
    // }

},{timestamps:true})

module.exports = {
    Story : mongoose.model('Story', StorySchema),
    Chapter : mongoose.model('Chapter', ChapterSchema),
    Entry : mongoose.model('Entry', EntrySchema),
}