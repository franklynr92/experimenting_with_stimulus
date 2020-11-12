import { Controller } from "stimulus"

export default class extends Controller {
  connect() {
    this.element.textContent = "It works!"
    console.log("Hi-oh", this.element)
  }
}
