const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');
const bin = require("./messageQueue.js")

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};

module.exports.router = (req, res, next = ()=>{}) => {
  // console.log('Serving request type ' + req.method + ' for url ' + req.url);
  res.writeHead(200, headers);
  if (req.method === 'GET'){
    var direction = bin.dequeue();
    if (direction) {
    res.write(direction);
    }
    // res.end(bin.dequeue());
  }
  res.end();
  next(); // invoke next() at the end of a request to help with testing!
};
