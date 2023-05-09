import { appState } from "../AppState.js"

function drawPlayers() {
  console.log(app);
  let template = ""
  template += `<form class="m-1" onsubmit="app.playersController.addPlayer()"><div><label for="name"> Player Name:</label><input type="text" minlength="2" maxlength="15" name="name" required />
    </div>
    <div>
      <button class="btn btn-primary m-1" type="submit" onclick="app.playersController.addPlayer()">Add Player</button>
      <button class="btn btn-primary m-1" type="submit" onclick="app.playersController.addPlayer()">Remove Player</button>
    </div>
  </form>`
  document.getElementById("app").innerHTML = template
}



export class PlayersController {
  constructor() {
  
    drawPlayers()

  }
   // PUBLIC OR AVAILABLE FOR THE USER TO "CLICK"
   addPlayer() {
    try {
      window.event.preventDefault()
      const form = window.event.target
      console.log("add player is running")
      // extract form data
      //
      form.reset()
    } catch (e) {
      console.error("[addPlayer]", error)
    }
  }
test(){
  console.log("Test is working");
}

}

