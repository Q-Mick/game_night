import { ValuesController } from "./Controllers/ValuesController.js";
import { PlayersController } from "./Controllers/PlayersControllers.js";
class App {
  valuesController = new ValuesController();
  playersController = new PlayersController();
  // Create the players controller class
  
}


window["app"] = new App();
