import { Controller } from "stimulus"

export default class extends Controller {
    //stimulus loads the controller class, looks for a target name strings in a static array called targets.
    //for each targfet name in the array, stimulus adds three new properties to your controller
    //source target name becomes the following properties:
    //this.sourceTarget evaluates to the first source target in your controller's scope.
    //if there is no source target, accessing the property throws an error.
    ///this.sourcetargets evaluates to an array of all source targets in the controller's scope.
    //this.hasSourceTarget evaluates to true if there is a source target or falase if not.
    static targets = [ "source" ]
    copy() {
        this.sourceTarget.select()
        document.execCommand("copy")
    }
}