var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
  date: {
    type:Date,
    required:[true,'date isn\'t be empty']
  },
  title:{
    type:String,
    required:[true,'title isn\'t be empty'],
    unique:true
  },
  name: {
    type:String,
    required:[true,'name isn\'t be empty']
  },
  email: {
    type: String,
    required:[true,'email isn\'t be empty'],
    unique:true
  }
});


var Event = mongoose.model('Event', eventSchema);

module.exports = Event;
