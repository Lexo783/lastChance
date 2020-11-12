var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Express RESTful API');
});

server.listen(4000);

// socket io
io.on('connection', function (socket) {
  console.log('User connected');
  socket.on('disconnect', function() {
    console.log('User disconnected');
  });
  socket.on('save-message', function (data) {
    console.log(data);
    io.emit('new-message', { message: data });
  });
});

module.exports = router;
