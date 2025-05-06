
function showInput() {

    var user_input = document.getElementById("user-input").value

    if (user_input == null) {
        document.getElementById("showInput").textContent = "Please submit something."
    } else {
        document.getElementById("showInput").textContent = "Thanks for submitting input - you submitted the following text: " + user_input 
    }
}


    var entries = ["Today was a good day", "The sky is blue", 
    "It's raining heavily now"];
    
    console.log(entries);
    