const { response, request } = require("express");
const axios = require("axios");

/**
 * Receives a url and gets the data out of the fetched JSON response (uses axios)
 * @param  {String} url The url where the needed data is stored
 * @return {Object} Returns the data property of the response.
 */
async function get(url) {
  try {
    const response = await axios.get(url);
    return response.data.values;
  } catch (error) {
    return {};
  }
}

function getFullName(player) {
  return `${player["first_name"]} ${player["last_name"]}`;
}

const getPairsOfPlayers = async (req = request, resp = response) => {
  //Implementar logica aquí
  const data = await get("https://gist.githubusercontent.com/jhonatan89/bc554ec3ded15407609714e8b7b8f1c8/raw/5ab1e3e5b45e99aabcbbdd30f55d2ae5eafb9cbe/nba-players");
  const solArray = [];
  const targetValue = req.query.input;
  for(let i = 0; i < data.length - 1; i++) {
    for(let j = i+1; j < data.length; j++) {
      const firstPossiblePlayer = data[i];
      const secondPossiblePlayer = data[j];
      if(parseInt(firstPossiblePlayer["h_in"]) + parseInt(secondPossiblePlayer["h_in"]) === parseInt(targetValue)) {
        solArray.push({firstPlayer: `${getFullName(firstPossiblePlayer)}`, secondPlayer: `${getFullName(secondPossiblePlayer)}`});
      }
    }
  }
  return resp.json({ playerList: solArray });
};

module.exports = { getPairsOfPlayers };
