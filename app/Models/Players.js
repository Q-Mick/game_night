import { generateId } from "../Utils/generateId.js"

export class Player {
/**this is the function that gets called when a new Player class is created
 * 
 * @param {*} name string
 * @param {*} color string
 */
  constructor(name, color){
    this.name = name;
    this.color = color;
    this.id = generateId()
    // score is default set to 0
    this.score = 0
  }
}