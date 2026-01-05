module.exports = (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('antisocialdreams - server\n' + 
          'Request received from: ' + req.headers['referer'] + '\n' +
          'Time: ' + new Date().toISOString());
};
