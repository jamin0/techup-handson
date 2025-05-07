
function showInput() {

    var user_input = document.getElementById("user-input").value

    if (user_input == "") {
        document.getElementById("showInput").textContent = ("Please submit something.");
    } else {
        document.getElementById("showInput").textContent = ("Thanks for submitting input - you submitted the following text: \"" + user_input +"\"");
    }
}

    