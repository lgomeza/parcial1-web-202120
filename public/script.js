const enterButton = document.getElementById("enter");
const input = document.getElementById("inputText");
const table = document.getElementById("table");
const tbody = document.getElementById("body-table");
const message = document.getElementById("message");

const host = "localhost";
const port = "3000";

enterButton.addEventListener("click", (event) => {
  targetHeight = parseInt(input.value);
  getresults(targetHeight);
  event.preventDefault();
});

/**
 * Llamado al backend con queryParam
 * @param {*} heightRef
 */
async function getresults(heightRef) {
  const resp = await fetch(`http://${host}:${port}/api/?input=${heightRef}`);
  const rawData = await resp.json();
  const data = rawData.playerList;
  printValues(data);
}

function createTd(content) {
  const newTd = document.createElement("td");
  newTd.innerHTML = content;
  return newTd;
}

function createRow(playerData, rowIndex) {
  const playerMap = new Map(Object.entries(playerData));

  const newRow = document.createElement("tr");
  newRow.appendChild(createTd(rowIndex));
  playerMap.forEach((attValue) => {
    newRow.appendChild(createTd(attValue));
  });

  return newRow;
}

function printValues(data) {
  removeAllChildNodes(tbody);
  if(data.length === 0) {
    message.innerHTML = "No matches found. Try again";
    table.style.display = "none";
  }
  else{
    table.style.display = "";
    message.innerHTML = "";
    let index = 1;
    data.forEach(player => {
      tbody.appendChild(createRow(player, index));
      index += 1;
    });
  }
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
