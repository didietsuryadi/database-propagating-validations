var Event = require('../models/event')
var valid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

module.exports = {
  createEvent: function(req,res){

    if (!valid.test(req.body.email)) {
      res.json('Invalid Email Address!')
    } else if (!req.body.title) {
      res.json('Title is Required!')
    } else if (!req.body.name) {
      res.json('Description is Required')
    } else if (!req.body.date) {
      res.json('Event Schedule is Required')
    } else {
      Event.create({
        date: req.body.date,
        title: req.body.title,
        name: req.body.name,
        email: req.body.email
      }, function (err, data) {
        if (err) {
          res.status(500).json({
            message: "get something wrong while getting events",
            error: err
          })
        }else{
          res.json(data)
        }
      })
    }
  },
  updateEvent: function(req,res){
    Event.findOne({_id:req.params.id}, function(err, events){
      if (err){
        res.status(500).json({
          message: "get something wrong while update events",
          error: err
        })
      }
      if(req.body.date){
        events.date = req.body.date
      }
      if(req.body.title){
        events.title = req.body.title
      }
      if(req.body.name){
        events.name = req.body.name
      }
      if(req.body.email){
        events.email = req.body.email
      }

      events.save(function (err, events) {
        if (err) {
          res.status(500).json({
            message: 'get something wrong while update events',
            error: err
          })
        }else{
          res.json(events)
        }
      })
    })
  },
  deleteEvent: function(req,res){
    Event.findOneAndRemove({_id:req.params.id}, function(err, data){
      if (err){
        res.status(500).json({
        message: "There is something eror when delete event",
        error: err
        })
      }else{
        res.json(data)
      }
    })
  },
  readEvents: function(req,res){
    Event.find({}, function(err,data){
      if(err){
        res.status(500).json({
        message: "There is something eror when get event",
        error: err
        })
      }
      else if(!data){
        res.json({ message: 'There is no event'})
      }else{
        res.json(data)
      }
    })
  },
  readEvent: function(req,res){
    Event.findOne({_id:req.params.id}, function(err,data){
      if(err){
        res.status(500).json({
        message: "There is something eror when get event",
        error: err
        })
      }
      else if(!data){
        res.json({ message: 'There is no event with id'+req.params.id})
      }else{
        res.json(data)
      }
    })
  }
}
