/* Main */
exports.useData = function(func) {
  /* Return a function that is a callback to an http request. */
  return function(res) {
    res.setEncoding('utf8');
    var dataBuffer = [];

    // Build up data
    res.on('data', function(chunk) {
      dataBuffer.push(new Buffer(chunk));

    // Call function with no error and data
    }).on('end', function() {
      func(null, Buffer.concat(dataBuffer).toString());

    // Call function with error when error
    }).on('error', func);
  };
};
