const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


Todo.findByIdAndRemove('57bdb0fcdedf88540bfa2d66').then((todo) => {
  if (!todo) {
    return console.log("Unable to find user");
  }
  console.log(JSON.stringify(todo, undefined, 2));
}, (e) => {
  console.log(e);
});
