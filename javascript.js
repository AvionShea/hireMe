//hides all elements until called
document.getElementById("displayNone").style.visibility = "hidden"


//Yes to the "currently hiring" question
document.getElementById("yesHiring").addEventListener("click", yesHiring)
function yesHiring(){
    document.querySelector(".software").style.visibility = "visible"
    document.querySelector("#other").style.visibility = "visible"
    document.querySelector("#noHiring").style.visibility = "hidden"
}

//Yes to frontend hiring
document.getElementById("frontendButtonYes").addEventListener("click", frontendYesHiring)
function frontendYesHiring(){
    document.getElementById("backendPosition").style.visibility = "hidden"
    document.querySelector("#other").style.visibility = "hidden"
    document.querySelector("#fullStackYes").style.visibility = "visible"
    document.querySelector("#strictlyFrontYes").style.visibility = "visible"
    document.querySelector(".frontendTitle").style.visibility="visible"
}

//Yes to full-Stack
document.getElementById("fullStackYes").addEventListener("click", fullStackYesList)
function fullStackYesList(){
    document.querySelector(".fullStackFront").style.visibility="visible"
    document.querySelector("#strictlyFrontYes").style.visibility = "hidden"
    document.querySelector(".strictlyFront").style.visibility = "hidden"
}
//Yes to Strictly Front
document.getElementById("strictlyFrontYes").addEventListener("click", strictlyFrontYesList)
function strictlyFrontYesList(){
    document.querySelector(".strictlyFront").style.visibility = "visible"
    document.querySelector("#fullStackYes").style.visibility="hidden"
    document.querySelector(".fullStackFront").style.visibility="hidden"
    
}

//Function that shows the other position option
document.getElementById("otherPositions").addEventListener("click", otherPositions)

function otherPositions(){
    document.getElementById("otherThankYou").innerText = "Thank you for the consideration; however, I'm currently looking to utilize my skills and knowledge in a software engineering position."
    document.querySelector(".software").style.visibility = "hidden"
    document.querySelector("#yesHiring").style.visibility = "hidden"
    document.querySelector(".fullStackFront").style.visibility="hidden"
    document.querySelector("#strictlyFrontYes").style.visibility = "hidden"
    document.querySelector(".strictlyFront").style.visibility = "hidden"
    document.querySelector(".frontendTitle").style.visibility="hidden"
    document.querySelector("#fullStackYes").style.visibility="hidden"
}

//function for "not" currently hiring
document.getElementById("noHiring").addEventListener("click", noHiring)

function noHiring(){
    document.getElementById("yesFutureHiring").style.visibility ="visible"
    document.querySelector("#yesHiring").style.visibility = "hidden"
    
    //loops back to yes, if hiring in the future is selected
    document.getElementById("yesFutureBtn").addEventListener("click", yesFutureHiring)
    function yesFutureHiring(){
        yesHiring()
        document.querySelector("#yesFutureHiring").style.visibility = "hidden"
        }
        
    //if not hiring in future is selected, displays a message
    document.getElementById("noFutureBtn").addEventListener("click", noFutureHiring)
    function noFutureHiring(){
        document.getElementById("yesFutureBtn").style.visibility ="hidden"
        document.getElementById("notToday").innerText = "Thank you for viewing. Please feel free to connect with me on LinkedIn should you find yourself in need of a software engineer/developer."}
}