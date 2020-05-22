const fetch = require('node-fetch');
const apiKey = '39052074F6D0DBBA8A46AE1158F803FB';
//const url = 'http://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v0002/?gameid=489830';

// All API calls take the form http://api.steampowered.com/<interface name>/<method name>/v<version>/?key=<api key>&format=<format>.

async function fetchJSON_Object(url) {
    let response = await fetch(url); // BUFFER
    let jsonObj = await response.json(); // OBJECTS
    return jsonObj;
    //If you want the string return JSON.stringify(jsonObj);
}

async function printAchievements(gameID) {
    let url = `http://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v0002/?gameid=${gameID}`;
    let json =  await fetchJSON_Object(url).catch( ()=>{console.log('Something wrong with URL');} );
    let jsonObj = await json['achievementpercentages'];
    let allachievements = jsonObj['achievements'];

    for (let achievement of allachievements) {
         let name = achievement['name'];
         console.log(name);
    }
}

printAchievements(440);

//getData(url).catch(function() { console.log('ERROR'); });dnod\\