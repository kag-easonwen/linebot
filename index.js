var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId: 1550553289,
  channelSecret: 'c4c1c39fee8a0f06715c34e9c8af325f',
  channelAccessToken: 'PQ04n0HIwimNU7yrcYwRS1kUNtt6NG2chZTxnv/5s3P72g2Kkd7Y9ezi5D8bKhYufH7YHCnlff7+4cSVZwxxX1MswIGU0WwJDnfyOrw/5pC1SOqbkz4bQE7l7j9f4cSeKi6i8GfL3xPcBwkKc1K0cgdB04t89/1O/w1cDnyilFU='
});

bot.on('message', function(event) {
  console.log(event); //把收到訊息的 event 印出來看看
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

//因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});