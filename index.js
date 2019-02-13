// This loads the environment variables from the .env file
require('dotenv-extended').load();
var restify = require('restify');
var builder = require('botbuilder');
// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
    console.log('%s listening to %s', server.name, server.url);
});
// Create chat bot and listen for messages
var connector = new builder.ChatConnector ({
    appId: '3bf75196-3d63-4dec-8aa6-46f57d398747',
    appPassword: 'atdreE}]!!oxVGDLVU88283'
});
var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());
bot.dialog('/',function(session){
    session.send("Hello World");
});