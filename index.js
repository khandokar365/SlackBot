const SlackBot = require("slackbots");
const axios = require("axios");

const bot = new SlackBot({
    token: 'xoxb-624731596032-624789886608-ZIeDtYeXtMbsuGMFgENDfGBL',
    name : 'jokebot'
})

//start Handler

bot.on('start', () => {
const params =  {

    icon_emoji : ':smiley:'
}
bot.postMessageToChannel('general','Get Ready To Laugh With @Jokebot!', params);
});

//error
bot.on('error', (err) =>{
console.log(err)
});

//Message Handlers

bot.on('message', (data) =>{
  //  console.log(data)

    if(data.type !== 'message'){
        return;
    }else{
        //console.log(data);
        handleMessage(data.text);
    }
    });

//response to data
function handleMessage(message){
if(message.includes === ' chuck'){
    chuckJoke();
}

    }

//Tell a Chuck Norris Joke

function chuckJoke (){
    
}

