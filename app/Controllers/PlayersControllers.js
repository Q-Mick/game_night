import { appState } from "../AppState.js"
import { Player } from "../Models/players.js";

function drawForm() {
  console.log(app);
  let template = ""
  template += `<form class="m-1" onsubmit="app.playersController.addPlayer()"><div><label for="name"> Player Name:</label><input type="text" minlength="2" maxlength="15" name="name" required />
    </div>
    <div>
      <button class="btn btn-primary m-1" type="submit" onclick="">Add Player</button>
      <button class="btn btn-primary m-1" type="submit" onclick="">Remove Player</button>
    </div>
  </form>
  <div id="players></div>
  `

  document.getElementById("app").innerHTML = template
}



export class PlayersController {
  constructor() {
  drawForm()
    

  }
   // PUBLIC OR AVAILABLE FOR THE USER TO "CLICK"
   addPlayer() {
     debugger
     window.event.preventDefault()
     const form = window.event.target
     const playerName = form.elements.name.value;
     let player = new Player(playerName,"")
     let template = ''
     
      template +=`
      <div id="${player.id}">  
            <h1 class="">${player.name}</h1>
            <button class="btn btn-primary" onclick="addScore(${player.name})">+</button>
            <button class="btn btn-primary" onclick="subtractScore(${player.name})">-</button>
            <p>Score: <span id="${player.name}">10</span></p>
            </div>`
            
    console.log("add player is running", player.name);
    // drawPlayers(template)
    document.getElementById("players").innerHTML = template
    form.reset()
  }

  // drawPlayers(template){
  
  //   document.getElementById("players").innerHTML = template
  
  // }
}

