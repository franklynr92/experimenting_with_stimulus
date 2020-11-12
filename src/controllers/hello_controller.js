import { Controller } from "stimulus"

export default class extends Controller {
    static targets = [ "name" ]
    greet() {
        console.log(`Hello, ${this.name}!`)
    }

    get name(){
        return this.nameTarget.value
    }

    feet(){
        console.log("Hello, there!", this.element)
    }
}